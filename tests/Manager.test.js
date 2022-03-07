const Manager = require("../lib/Manager");

// In this test file, we are testing the methods on any instance of the Employee class

// Testing .getRole method
describe("Role", () => {
  it("Role of manager is returned by getRole", () => {
    const man = new Manager("Jack", "12", "jack@gmail.com", "103");
    expect(man.getRole()).toBe("Manager");
  });
});

// Testing .getName method
describe("Name", () => {
  it("Name of manager is returned by getName", () => {
    const man = new Manager("Jack", "12", "jack@gmail.com", "103");
    expect(man.getName()).toBe("Jack");

    man.name = "Jackson";
    expect(man.getName()).toBe("Jackson");
  });
});

// Testing .getId method
describe("ID", () => {
  it("Id of manager is returned by getId", () => {
    const man = new Manager("Jack", "12", "jack@gmail.com", "103");
    expect(man.getId()).toBe("12");

    man.id = "13";
    expect(man.getId()).toBe("13");
  });
});

// Testing .getEmail method
describe("Email", () => {
  it("Email of manager is returned by getEmail", () => {
    const man = new Manager("Jack", "12", "jack@gmail.com", "103");
    expect(man.getEmail()).toBe("jack@gmail.com");

    man.email = "jack@yahoo.com";
    expect(man.getEmail()).toBe("jack@yahoo.com");
  });
});

// Testing .getOfficeNumber method
describe("OfficeNumber", () => {
  it("Office Number of manager is returned by getOfficeNumber", () => {
    const man = new Manager("Jack", "12", "jack@gmail.com", "103");
    expect(man.getOfficeNumber()).toBe("103");

    man.officeNumber = "203";
    expect(man.getOfficeNumber()).toBe("203");
  });
});
