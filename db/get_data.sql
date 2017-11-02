SELECT *
FROM restaurant_submissions
JOIN categories ON restaurant_submissions.category_id = categories.category_id
WHERE city_id = $1;
