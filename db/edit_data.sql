UPDATE restaurant_submissions
SET rating = $2
where id = $1;