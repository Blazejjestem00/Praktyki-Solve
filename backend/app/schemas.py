from typing import Optional, List
from datetime import datetime
from sqlmodel import SQLModel

class UserCreate(SQLModel):
    name: str
    surname: Optional[str] = None
    age: int
    email: str
    password: str
    interests: Optional[List[str]] = None
    instagram: Optional[str] = None
    caption: Optional[str] = None


class UserResponse(SQLModel):
    id: int
    name: str
    surname: Optional[str]
    age: int
    email: str
    interests: Optional[List[str]]
    instagram: Optional[str]
    caption: Optional[str]
    created_at: datetime