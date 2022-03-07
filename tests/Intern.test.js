const Intern = require("../lib/Intern");

// In this test file, we are testing the methods on any instance of the Intern class

// Testing .getSchool method
describe("school", () => {
  it("School name of intern is returned by getSchool", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", "GT");
    expect(int.getSchool()).toBe("GT");

    int.school = "Georgia Tech";
    expect(int.getSchool()).toBe("Georgia Tech");
  });
});

// Testing .getRole method
describe("Role", () => {
  it("Role of intern is returned by getRole", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", "GT");
    expect(int.getRole()).toBe("Intern");
  });
});

// Testing .getName method
describe("Name", () => {
  it("Name of intern is returned by getName", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", "GT");
    expect(int.getName()).toBe("Jack");

    int.name = "Jackson";
    expect(int.getName()).toBe("Jackson");
  });
});

// Testing .getId method
describe("ID", () => {
  it("Id of intern is returned by getId", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", "GT");
    expect(int.getId()).toBe("12");

    int.id = "13";
    expect(int.getId()).toBe("13");
  });
});

// Testing .getEmail method
describe("Email", () => {
  it("Email of intern is returned by getEmail", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", "GT");
    expect(int.getEmail()).toBe("jack@gmail.com");

    int.email = "jack@yahoo.com";
    expect(int.getEmail()).toBe("jack@yahoo.com");
  });
});
