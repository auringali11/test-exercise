SET DATESTYLE TO ISO;

CREATE OR REPLACE FUNCTION trigger_set_date()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users (
    id serial NOT NULL PRIMARY KEY UNIQUE,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    age int NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    updated_at DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (first_name, last_name, age, created_at, updated_at) VALUES
('Bob', 'Davidson', 21, '2022-03-25', '2022-03-27'),
('User2', 'Davidson', 21, '2022-03-25', '2022-03-27'),
('User3', 'Davidson', 21, '2022-03-25', '2022-03-27');

CREATE TRIGGER set_date
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_date();


CREATE TABLE books (
    id serial NOT NULL PRIMARY KEY,
    title varchar(50) NOT NULL,
    author varchar(500) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    user_id int,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);

INSERT INTO books (title, author, created_at, user_id) VALUES
('Clean Architecture', 'Rober Martin', '2022-03-25', 1),
('Book2', 'Rober Martin', '2022-03-26', 2),
('Book3', 'Rober Martin', '2022-03-27', 3);