# app/models.py
from typing import Optional, List
from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, ARRAY, String


class UserBase(SQLModel):
    name: str
    surname: Optional[str] = None
    age: int
    email: str = Field(index=True, unique=True)
    interests: Optional[List[str]] = Field(default=None, sa_column=Column(ARRAY(String())))
    instagram: Optional[str] = None
    caption: Optional[str] = None


class User(UserBase, table=True):
    __tablename__ = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    password: str

    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(
        default_factory=datetime.utcnow,
        sa_column_kwargs={"onupdate": datetime.utcnow}
    )

    photos: List["Photo"] = Relationship(back_populates="user")
    swipes_made: List["Swipe"] = Relationship(back_populates="swiper", sa_relationship_kwargs={"foreign_keys": "[Swipe.swiper_id]"})
    swipes_received: List["Swipe"] = Relationship(back_populates="swiped", sa_relationship_kwargs={"foreign_keys": "[Swipe.swiped_id]"})
    matches_as_user1: List["Match"] = Relationship(back_populates="user1", sa_relationship_kwargs={"foreign_keys": "[Match.user1_id]"})
    matches_as_user2: List["Match"] = Relationship(back_populates="user2", sa_relationship_kwargs={"foreign_keys": "[Match.user2_id]"})


class Photo(SQLModel, table=True):
    __tablename__ = "photos"

    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="users.id")
    photo_url: str
    is_primary: Optional[bool] = False
    position: Optional[int] = 0
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    user: Optional["User"] = Relationship(back_populates="photos")


class Swipe(SQLModel, table=True):
    __tablename__ = "swipes"

    id: Optional[int] = Field(default=None, primary_key=True)
    swiper_id: int = Field(foreign_key="users.id")
    swiped_id: int = Field(foreign_key="users.id")
    action: str = Field(max_length=10)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    swiper: Optional["User"] = Relationship(back_populates="swipes_made", sa_relationship_kwargs={"foreign_keys": "[Swipe.swiper_id]"})
    swiped: Optional["User"] = Relationship(back_populates="swipes_received", sa_relationship_kwargs={"foreign_keys": "[Swipe.swiped_id]"})


class Match(SQLModel, table=True):
    __tablename__ = "matches"

    id: Optional[int] = Field(default=None, primary_key=True)
    user1_id: int = Field(foreign_key="users.id")
    user2_id: int = Field(foreign_key="users.id")
    matched_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    user1: Optional["User"] = Relationship(back_populates="matches_as_user1", sa_relationship_kwargs={"foreign_keys": "[Match.user1_id]"})
    user2: Optional["User"] = Relationship(back_populates="matches_as_user2", sa_relationship_kwargs={"foreign_keys": "[Match.user2_id]"})