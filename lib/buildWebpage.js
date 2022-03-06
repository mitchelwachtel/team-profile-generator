const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require("fs");

function createHTML(obj) {
  const cardsArr = buildCards(obj);
  const fileName = `team-profile.html`;
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
          <span class="navbar-brand mb-0 h1">My Profile</span>
        </nav>
      </header>
  
      <div class="container-fluid d-flex justify-content-center">\n`;
  const cardsDiv = cardsArr.join(" ");
  const afterCards = `</div>
  </body>
</html>`;

  const contents = `${beforeCards} ${cardsDiv} ${afterCards}`;

  fs.writeFile(fileName, contents, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function buildCards(obj) {
  const cardsArr = [];
  obj.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      const name = employee.getName();
      const id = employee.getId();
      const email = employee.getEmail();
      const officeNumber = employee.getOfficeNumber();
      const card = `<div class="card" style="width: 18rem">
      <div class="card-header">${name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${officeNumber}</li>
      </ul>
    </div>\n`;
      cardsArr.push(card);
    } else if (employee.getRole() === "Engineer") {
      const name = employee.getName();
      const id = employee.getId();
      const email = employee.getEmail();
      const github = employee.getGithub();
      const card = `<div class="card" style="width: 18rem">
      <div class="card-header">${name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${github}</li>
      </ul>
    </div>\n`;
      cardsArr.push(card);
    } else if (employee.getRole() === "Intern") {
      const name = employee.getName();
      const id = employee.getId();
      const email = employee.getEmail();
      const school = employee.getSchool();
      const card = `<div class="card" style="width: 18rem">
      <div class="card-header">${name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${school}</li>
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
