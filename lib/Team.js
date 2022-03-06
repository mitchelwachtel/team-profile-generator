const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const buildWebpage = require("./buildWebpage");

class Team {
  constructor() {
    this.obj = [];
  }
  buildManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is the manager's ID?",
          name: "managerID",
        },
        {
          type: "input",
          message: "What is the manager's email?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "What is the manager's office number?",
          name: "managerOfficeNumber",
        },
        {
          type: "list",
          message: "Who would you like to add next?",
          name: "continue",
          choices: ["Engineer", "Intern", "No one - The whole team is added!"],
        },
      ])
      .then((response) => {
        this.obj.push(
          new Manager(
            response.managerName,
            response.managerID,
            response.managerEmail,
            response.managerOfficeNumber
          )
        );
        if (response.continue === "Engineer") {
          buildEngineer();
        } else if (response.continue === "Intern") {
          buildIntern();
        } else {
          buildWebpage.buildWebpage();
        }
      });
  }
}

module.exports = Team;
