const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require("fs");

// The 'boilerplate' HTML is stored in the createHTML function with beforeCards and afterCards variables.
// The cards with employee information returned as array from buildCards function are joined as strings
function createHTML(obj) {
  const cardsArr = buildCards(obj);
  const fileName = `./dist/team-profile.html`;
  const beforeCards = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
  
    <body>
      <header>
        <nav class="navbar d-flex justify-content-center">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </nav>
      </header>
  
      <div class="cards-div container-fluid d-flex justify-content-center">\n`;
  const cardsDiv = cardsArr.join(" ");
  const afterCards = `</div>
  </body>
</html>`;

  const contents = `${beforeCards} ${cardsDiv} ${afterCards}`;

  fs.writeFile(fileName, contents, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// The cards with employee information on them are created with the buildCards function and then returned as an array 
function buildCards(obj) {
  const cardsArr = [];
  obj.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      const name = employee.getName();
      const role = employee.getRole();
      const id = employee.getId();
      const email = employee.getEmail();
      const officeNumber = employee.getOfficeNumber();
      const card = `<div class="card">
      <div class="card-header">
      <div>${name}</div>
      <div>&#9749; ${role}</div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${id}</li>
        <li class="list-group-item">Email: <a target="_blank" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>
    </div>\n`;
      cardsArr.push(card);
    } else if (employee.getRole() === "Engineer") {
      const name = employee.getName();
      const role = employee.getRole();
      const id = employee.getId();
      const email = employee.getEmail();
      const github = employee.getGithub();
      const card = `<div class="card">
      <div class="card-header">
      <div>${name}</div>
      <div>&#128083; ${role}</div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${id}</li>
        <li class="list-group-item">Email: <a target="_blank" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Github: <a target="_blank" href="https://www.github.com/${github}">${github}</a></li>
      </ul>
    </div>\n`;
      cardsArr.push(card);
    } else if (employee.getRole() === "Intern") {
      const name = employee.getName();
      const role = employee.getRole();
      const id = employee.getId();
      const email = employee.getEmail();
      const school = employee.getSchool();
      const card = `<div class="card">
      <div class="card-header">
      <div>${name}</div>
      <div>&#127891; ${role}</div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${id}</li>
        <li class="list-group-item">Email: <a target="_blank" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>\n`;
      cardsArr.push(card);
    }
  });
  return cardsArr;
}

module.exports = {
  createHTML,
};
