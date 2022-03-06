const { mainModule } = require("process");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function buildWebpage(obj) {
    console.log(obj);
}

module.exports = buildWebpage();