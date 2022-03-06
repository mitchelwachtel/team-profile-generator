const Employee = require("../lib/Employee");

describe("Name", () => {
  it("name of employee is returned by getName", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getName()).toBe("Jack");

    emp.name = "Jackson";
    expect(emp.getName()).toBe("Jackson");
  });
});

describe("Id", () => {
  it("Id of employee is returned by getId", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getId()).toBe("12");

    emp.id = "13";
    expect(emp.getId()).toBe("13");
  });
});

describe("Email", () => {
  it("Email of employee is returned by getEmail", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getEmail()).toBe("jack@gmail.com");

    emp.email = "jack@yahoo.com";
    expect(emp.getEmail()).toBe("jack@yahoo.com");
  });
});

describe("Role", () => {
  it("Role of employee is returned by getRole", () => {
    const emp = new Employee("Jack", "12", "jack@gmail.com");
    expect(emp.getRole()).toBe("Employee");
  });
});
