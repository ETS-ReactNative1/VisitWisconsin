CREATE TABLE IF NOT EXISTS restraunts_submissions (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    restraunt_name VARCHAR(180),
    restraunt_address TEXT,
    rating INTEGER,
    city_id INTEGER REFERENCES major_cities(city_id)
)