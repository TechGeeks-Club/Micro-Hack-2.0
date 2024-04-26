-- database: /home/mohammedaouamri/DEV/Micro-Hack-2.0/backend/db.sqlite3

-- Use the ▷ button in the top right corner to run the entire file.

SELECT * FROM django_migrations;
-- Core User Data
INSERT INTO core_user (password, last_login, username, email, phone, profile_pic, first_name, last_name, join_date, birthday, is_active, is_superuser, is_admin, is_staff)
VALUES 
('userpass321', NULL, 'user5', 'user5@example.com', '123456789', NULL, 'Olivia', 'Jones', NULL, NULL, 1, 0, 0, 0),
('userpass789', NULL, 'user6', 'user6@example.com', '987654321', NULL, 'Sophia', 'Martinez', NULL, NULL, 1, 0, 0, 0),
('userpass987', NULL, 'user7', 'user7@example.com', '654987321', NULL, 'Liam', 'Garcia', NULL, NULL, 1, 0, 0, 0),
('userpass654', NULL, 'user8', 'user8@example.com', '321987654', NULL, 'Ava', 'Miller', NULL, NULL, 1, 0, 0, 0),
('userpass321', NULL, 'user9', 'user9@example.com', '456123789', NULL, 'Noah', 'Wilson', NULL, NULL, 1, 0, 0, 0);






INSERT INTO task_priority (name, value)
VALUES 
    ('Low', 1),
    ('Medium', 2),
    ('High', 3);

-- Status Data
INSERT INTO task_status (name, value)
VALUES 
    ('TO DwnvksjlnkfjO', 1),
    ('In Progress', 2),
    ('Completed', 3);

INSERT INTO core_user (password, last_login, username, email, phone, profile_pic, first_name, last_name, join_date, birthday, is_active, is_superuser, is_admin, is_staff)
VALUES 
    ('password123', NULL, 'admin', 'ad77min@example.com', NULL, NULL, 'Admin', 'Doe', NULL, NULL, 1, 1, 1, 1),
    ('userpass456', NULL, 'us66er1', 'us77er1@example.com', NULL, NULL, 'John', 'Smith', NULL, NULL, 1, 0, 0, 0),
    ('userpass789', NULL, 'us66er2', 'us77er2@example.com', NULL, NULL, 'Jane', 'Johnson', NULL, NULL, 1, 0, 0, 0),
    ('userpass987', NULL, 'us66er3', 'us77er3@example.com', NULL, NULL, 'Michael', 'Williams', NULL, NULL, 1, 0, 0, 0),
    ('userpass654', NULL, 'us66er4', 'us77er4@example.com', NULL, NULL, 'Emma', 'Brown', NULL, NULL, 1, 0, 0, 0);



-- Task Data
INSERT INTO task_taks (title, description, created_at, end_date, created_by_id, priority_id, status_id)
VALUES 
('Task 1', 'Description for Task 1', '2024-04-26 08:35:27', NULL, 'user5', 1, 1),
('Task 2', 'Description for Task 2', '2024-04-26 08:35:27', NULL, 'user6', 2, 2),
('Task 3', 'Description for Task 3', '2024-04-26 08:35:27', NULL, 'user7', 3, 3),
('Task 4', 'Description for Task 4', '2024-04-26 08:35:27', NULL, 'user8', 1, 1),
('Task 5', 'Description for Task 5', '2024-04-26 08:35:27', NULL, 'user9', 2, 2);
