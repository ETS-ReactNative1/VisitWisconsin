CREATE TABLE IF NOT EXISTS restaurant_submissions (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    restaurant_name VARCHAR(180),
    restaurant_address TEXT,
    rating INTEGER,
    category_id INTEGER REFERENCES categories(category_id),
    city_id INTEGER REFERENCES major_cities(city_id)
)