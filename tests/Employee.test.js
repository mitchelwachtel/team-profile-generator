const Employee = require("../lib/Employee");

// In this test file, we are testing the methods on any instance of the Employee class

// Testing .getName method
describe("Name", () => {
  it("name of employee is returned by getName", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getName()).toBe("Jack");

    emp.name = "Jackson";
    expect(emp.getName()).toBe("Jackson");
  });
});

// Testing .getId method
describe("Id", () => {
  it("Id of employee is returned by getId", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getId()).toBe("12");

    emp.id = "13";
    expect(emp.getId()).toBe("13");
  });
});

// Testing .getEmail method
describe("Email", () => {
  it("Email of employee is returned by getEmail", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getEmail()).toBe("jack@gmail.com");

    emp.email = "jack@yahoo.com";
    expect(emp.getEmail()).toBe("jack@yahoo.com");
  });
});

// Testing .getRole method
describe("Role", () => {
  it("Role of employee is returned by getRole", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getRole()).toBe("Employee");
  });
});
