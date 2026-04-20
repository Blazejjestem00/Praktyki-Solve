from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

from .database import init_db, create_db_and_tables, get_session
from . import models
from .routers import users, swipes

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()                    # sprawdza połączenie
    create_db_and_tables()       # tworzy tabele jeśli nie ma
    print("Backend wystartował – baza PostgreSQL połączona")
    yield

app = FastAPI()

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Solve / Tinder Clone - Backend",
        version="0.1.0",
        summary="This is a very custom OpenAPI schema",
        description="API dla aplikacji typu Tinder",
        routes=app.routes,
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

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
    return {"message": "Solve Backend is running!", "docs": "/docs"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}