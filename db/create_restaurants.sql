INSERT INTO restaurant_submissions
(first_name, restaurant_name, restaurant_address, rating, city_id, category_id)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;