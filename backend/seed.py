import random
from sqlalchemy import text
from app.database import engine
from sqlmodel import Session, select
from app.models import User, Photo

def seed_database():
    print("Seeding database with 15 users...")

    first_names_m = ["Jan", "Piotr", "Michał", "Tomek", "Paweł", "Kuba", "Adam", "Szymon"]
    first_names_f = ["Anna", "Kasia", "Magda", "Ola", "Natalia", "Julia", "Zuzia", "Maja"]
    surnames = ["Kowalski", "Nowak", "Wiśniewski", "Wójcik", "Kaczmarek", "Mazur", "Krawczyk", "Piotrowska", "Grabowski", "Zielińska", "Szymańska", "Woźniak"]
    interests_pool = ["sport", "muzyka", "podróże", "siłownia", "kolarstwo", "bieganie", "frontend", "design", "fotografia", "trekking", "gotowanie", "wino", "książki", "kawiarnie", "psychologia", "gry", "streaming", "technologia", "zwierzęta", "spacery", "wolontariat", "sztuka", "UX"]
    captions = [
        "Lubię długie spacery po plaży",
        "Szukam kogoś do wspólnych treningów",
        "Pasjonat podróży i dobrej kawy",
        "Kreatywna dusza szukająca inspiracji",
        "Uwielbiam gotować i odkrywać nowe smaki",
        "Książki, kawa i dobre rozmowy",
        "Gamer i tech-geek",
        "Miłośnik zwierząt i natury",
        "Biegam maratony i dbam o formę",
        "Projektuję UI/UX i kocham sztukę",
        "Szukam kogoś do wspólnych wyjazdów w góry",
        "Słucham wszystkiego, od jazzu po techno",
        "Książkowa myszka z poczuciem humoru",
        "Włoski styl życia w polskim wydaniu",
        "Zawsze w ruchu, szukam aktywnej osoby"
    ]

    with Session(engine) as session:
        # Clear existing users to avoid duplicates during testing
        session.execute(text("TRUNCATE TABLE photos, swipes, matches, users RESTART IDENTITY CASCADE"))

        for i in range(15):
            gender = random.choice(['male', 'female'])
            first_name = random.choice(first_names_m if gender == 'male' else first_names_f)
            surname = random.choice(surnames)

            user = User(
                name=first_name,
                surname=surname,
                age=random.randint(18, 35),
                email=f"user{i+1}@test.com",
                password="password123",
                interests=random.sample(interests_pool, random.randint(2, 4)),
                instagram=f"{first_name.lower()}_{random.randint(10, 99)}",
                caption=random.choice(captions),
            )
            session.add(user)
            session.commit()
            session.refresh(user)

            # Add photos for each user (using randomuser.me)
            photo_type = "men" if gender == 'male' else "women"
            for p_idx in range(3):
                photo = Photo(
                    user_id=user.id,
                    photo_url=f"https://randomuser.me/api/portraits/{photo_type}/{random.randint(1, 99)}.jpg",
                    is_primary=(p_idx == 0),
                    position=p_idx
                )
                session.add(photo)
            session.commit()

    print("Successfully seeded 15 users with photos!")

if __name__ == "__main__":
    seed_database()