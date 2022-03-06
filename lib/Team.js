const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

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
        const manager = new Manager(
          response.managerName,
          response.managerID,
          response.managerEmail,
          response.managerOfficeNumber
        );
        this.obj.push(manager);
        console.log(manager);
      });
  }
}

module.exports = Team;