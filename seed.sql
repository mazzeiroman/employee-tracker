use employee_DB;

-- Departments-----
INSERT INTO departments (name)
VALUE ("HR");
INSERT INTO departments (name)
VALUE ("Purchasing");
INSERT INTO departments (name)
VALUE ("Engineering");
INSERT INTO departments (name)
VALUE ("Legal");

-- Role-------
INSERT INTO role (title, salary, department_id)
VALUE ("HR Director", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Recruiter", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Purchasing Manager",125000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Buyer", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 95000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 150000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 120000, 4);

-- Employee -------
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Smith", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jane", "Doe", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tegan","Kapp",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Nicole", "Domenik", null, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Nate", "Frey", 1, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Brandon", "Hawkins", 2, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Sean", "White", 3, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Wesley", "Forrest", 4, 8);