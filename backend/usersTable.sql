CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,
    surname     VARCHAR(50) NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    gender      VARCHAR(20) NOT NULL CHECK (gender IN ('male', 'female')),
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE swipes (
    id          SERIAL PRIMARY KEY,
    swiper_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    swiped_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    direction   VARCHAR(10) NOT NULL CHECK (direction IN ('like', 'pass')),
    created_at  TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_swipe UNIQUE (swiper_id, swiped_id)
);

CREATE TABLE matches (
    id          SERIAL PRIMARY KEY,
    user1_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user2_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    matched_at  TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_match UNIQUE (user1_id, user2_id)
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();