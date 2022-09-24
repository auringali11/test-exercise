CREATE TABLE users (
    id serial NOT NULL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    age int NOT NULL,
    created_at varchar(50) NOT NULL,
    updated_at varchar(50) NOT NULL
);

INSERT INTO users (first_name, last_name, age, created_at, updated_at) VALUES
('Bob', 'Davidson', 21, '2022-03-25', '2022-03-27');


CREATE TABLE books (
    id serial NOT NULL PRIMARY KEY,
    title varchar(50) NOT NULL,
    author varchar(500) NOT NULL,
    created_at varchar(50) NOT NULL,
    user_id int
);

INSERT INTO books (title, author, created_at, user_id) VALUES
('Clean Architecture', 'Rober Martin', '2022-03-25', 1)