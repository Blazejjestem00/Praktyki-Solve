# database.py
from sqlmodel import create_engine, Session, SQLModel
from sqlalchemy import text
import os
from dotenv import load_dotenv

load_dotenv()

# ================== USTAWIENIA POŁĄCZENIA ==================
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "password")
DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME", "tinder")

DATABASE_URL = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
# ===========================================================

engine = create_engine(
    DATABASE_URL,
    echo=False,           # Zmień na True tylko przy debugowaniu
    pool_pre_ping=True
)

def get_session():
    """Zwraca sesję do użycia w endpointach (Depends)"""
    with Session(engine) as session:
        yield session


def init_db():
    """Sprawdza połączenie z bazą"""
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        print(f"✅ Połączono z bazą: {DB_NAME} | Host: {DB_HOST}")
    except Exception as e:
        print(f"❌ Nie udało się połączyć z bazą: {e}")
        raise


def create_db_and_tables():
    """Tworzy tabele jeśli nie istnieją (dla kompatybilności z main.py)"""
    try:
        SQLModel.metadata.create_all(bind=engine, checkfirst=True)
        print("✅ Tabele sprawdzone / utworzone (checkfirst=True)")
    except Exception as e:
        print(f"⚠️ Błąd przy create_all: {e}")