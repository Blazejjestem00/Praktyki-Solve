# app/routers/swipes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from pydantic import BaseModel
from typing import Literal
from ..database import get_session
from ..models import Swipe, Match, User

router = APIRouter()


class SwipeCreate(BaseModel):
    swiper_id: int
    swiped_id: int
    action: Literal["like", "pass"]


@router.post("/", response_model=Swipe)
def create_swipe(swipe_data: SwipeCreate, session: Session = Depends(get_session)):
    # Sprawdź czy użytkownicy istnieją
    swiper = session.get(User, swipe_data.swiper_id)
    swiped = session.get(User, swipe_data.swiped_id)

    if not swiper or not swiped:
        raise HTTPException(status_code=404, detail="User not found")

    # Zapisz swipe
    swipe = Swipe.model_validate(swipe_data)
    session.add(swipe)
    session.commit()
    session.refresh(swipe)

    # Sprawdź czy powstał match (jeśli oboje polubili się nawzajem)
    if swipe_data.action == "like":
        reverse_swipe = session.exec(
            select(Swipe).where(
                Swipe.swiper_id == swipe_data.swiped_id,
                Swipe.swiped_id == swipe_data.swiper_id,
                Swipe.action == "like"
            )
        ).first()

        if reverse_swipe:
            # Tworzymy match (mniejszy id jako user1)
            match = Match(
                user1_id=min(swipe_data.swiper_id, swipe_data.swiped_id),
                user2_id=max(swipe_data.swiper_id, swipe_data.swiped_id)
            )
            session.add(match)
            session.commit()
            session.refresh(match)
            return swipe  # możesz zwrócić też informację o matchu później

    return swipe


@router.get("/matches/{user_id}", response_model=list[User])
def get_matches(user_id: int, session: Session = Depends(get_session)):
    # Find all matches where the user is either user1 or user2
    matches = session.exec(
        select(Match).where((Match.user1_id == user_id) | (Match.user2_id == user_id))
    ).all()

    matched_users = []
    for match in matches:
        # Get the other user in the match
        other_id = match.user2_id if match.user1_id == user_id else match.user1_id
        user = session.get(User, other_id)
        if user:
            matched_users.append(user)

    return matched_users