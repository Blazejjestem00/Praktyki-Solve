from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..database import get_session
from ..models import User
from ..schemas import UserCreate, UserResponse

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/register", response_model=UserResponse, status_code=201)
def register_user(user_in: UserCreate, session: Session = Depends(get_session)):
    try:
        existing = session.exec(
            select(User).where(User.email == user_in.email)
        ).first()

        if existing:
            raise HTTPException(status_code=400, detail="Email already registered")

        user = User(**user_in.dict())

        session.add(user)
        session.commit()
        session.refresh(user)

        return user

    except HTTPException:
        raise

    except Exception as e:
        session.rollback()
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/all", response_model=list[UserResponse])
def get_all_users(session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return users