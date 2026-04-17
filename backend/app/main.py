from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import init_db, create_db_and_tables, get_session
from . import models
from .routers import users, swipes

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()                    # sprawdza połączenie
    create_db_and_tables()       # tworzy tabele jeśli nie ma
    print("Backend wystartował – baza PostgreSQL połączona")
    yield


app = FastAPI(
    title="Solve / Tinder Clone - Backend",
    description="API dla aplikacji typu Tinder",
    version="0.1.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, tags=["users"])
app.include_router(swipes.router, tags=["swipes"])

@app.get("/")
def read_root():
    return {"message": "Solve Backend is running! 🚀", "docs": "/docs"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}