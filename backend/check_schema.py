import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="tinder",
    user="postgres",
    password="postgres"
)

cur = conn.cursor()

# Sprawdź kolumny w tabeli users
cur.execute("""
    SELECT column_name, data_type, is_nullable 
    FROM information_schema.columns 
    WHERE table_name = 'users' AND table_schema = 'public'
    ORDER BY ordinal_position;
""")

print("=== Struktura tabeli USERS ===")
for row in cur.fetchall():
    print(f"{row[0]}: {row[1]} (nullable: {row[2]})")

cur.close()
conn.close()