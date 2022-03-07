const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const buildPage = require("./buildWebpage");

// Team is a class that runs the inquirer algorithm, starting with buildManager, which builds a manager object with the Manager Class and then adds it to this.obj array
// It will then prompt the user if they want to add another employee (intern or engineer) and depending on the choice, the needed function (buildIntern or buildEngineer) will run
// These objects keep getting made and stored into the this.obj array until the user is done inputting information.
// Once done inputting information, the this.obj array is passed into createHTML function from the buildWebPage.js file
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
          this.buildEngineer();
        } else if (response.continue === "Intern") {
          this.buildIntern();
        } else {
          buildPage.createHTML(this.obj);
        }
      });
  }
  buildEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is this engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is this engineer's ID?",
          name: "engineerID",
        },
        {
          type: "input",
          message: "What is this engineer's email?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is this engineer's GitHub username?",
          name: "engineerGithub",
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
          new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGithub
          )
        );
        if (response.continue === "Engineer") {
          this.buildEngineer();
        } else if (response.continue === "Intern") {
          this.buildIntern();
        } else {
          buildPage.createHTML(this.obj);
        }
      });
  }
  buildIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is this intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is this intern's ID?",
          name: "internID",
        },
        {
          type: "input",
          message: "What is this intern's email?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What school does this intern attend?",
          name: "internSchool",
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
          new Intern(
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool
          )
        );
        if (response.continue === "Engineer") {
          this.buildEngineer();
        } else if (response.continue === "Intern") {
          this.buildIntern();
        } else {
          buildPage.createHTML(this.obj);
        }
      });
  }
}

module.exports = Team;
