INSERT INTO restraunts_submissions
(first_name, restraunt_name, restraunt_address, rating, city_id)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;