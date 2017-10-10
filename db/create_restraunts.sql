INSERT INTO restraunts_submissions
(first_name, restraunt_name, restraunt_address, rating)
VALUES
($1, $2, $3, $4)
RETURNING *;