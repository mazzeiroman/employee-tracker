require('dotenv').config()
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASSWORD,
  database: "employee_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

  function start() {
    inquirer
      .prompt({
        name: "addViewUpdate",
        type: "list",
        message: "What would you like to do?",
        choices: [
        "View departments",
        "View roles",
        "View employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee roles",
        "Exit"
        ]
      })
      .then(function(answer) {
    
        if (answer.addViewUpdate === "View departments") {
          viewDepartments();
        }
        else if(answer.addViewUpdate === "View roles") {
          viewRoles();
        } 
        else if(answer.addViewUpdate === "View employees") {
          viewEmployees();
        }
        else if(answer.addViewUpdate === "Add a department") {
          addDepartment();
        }
        else if(answer.addViewUpdate === "Add a role") {
          addRole();
        }
        else if(answer.addViewUpdate === "Add an employee") {
          addEmployee();
        }
        else if(answer.addViewUpdate === "Update employee roles") {
          updateEmployeeRoles();
        } else{
          connection.end();
        }
      });
  }

  function viewDepartments(){
    connection.query("SELECT * FROM departments;", function (err, res) {
        if (err) throw err;
        console.log("\n View Departments \n");
        console.table(res);
    })
    start();
  }

  function viewRoles(){
    connection.query("SELECT * FROM role;", function (err, res) {
        if (err) throw err;
        console.log("\n View Roles \n");
        console.table(res);
    })
    start();
  }
  
  function viewEmployees(){
    connection.query("SELECT * FROM employee;", function (err, res) {
        if (err) throw err;
        console.log("\n View Employees \n");
        console.table(res);
    })
    start();
  }

  function addDepartment() {
   
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the name of the department?"
        } ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO departments SET ?",
          {
            name: answer.name,
          },
          function(err) {
            if (err) throw err;
            // console.log("Department added successfully!");
            start();
          }
        );
      });
  }

  function addRole() {
   
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the name of the new role?"
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary of the new role?"
        },
        {
          name: "department_id",
          type: "input",
          message: "What is the department id number of the new role?"
        } ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id
          },
          function(err) {
            if (err) throw err;
            // console.log("Role added successfully!");
            start();
          }
        );
      });
  }

  function addEmployee() {
   
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the name of the new employee?"
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the last name of new employee?"
        },
        {
          name: "role_id",
          type: "input",
          message: "What is the role id number of the new employee?"
        },
        {
          name: "manager_id",
          type: "input",
          message: "What is the manager id number of the new employee?"
        }  ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
          },
          function(err) {
            if (err) throw err;
            // console.log("employee added successfully!");
            start();
          }
        );
      });
  }

  function updateEmployeeRoles() {
   
    inquirer
      .prompt([
        {
          name: "employee_id",
          type: "input",
          message: "What is the ID number of the employee?"
        }, 
        {
          name: "employee_new_role",
          type: "input",
          message: "What is the new role of the employee?"
          }])
      .then(function(answer) {
        connection.query(
          "UPDATE employee SET ? WHERE ?",
          [
            {
              role_id: answer.employee_new_role
            },
            {
              role_id: answer.employee_id
            }
          ],
          function(err) {
            if (err) throw err;
            // console.log("employee role updated successfully!");
            start();
          }
        );
      });
      
}

