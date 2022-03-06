const Intern = require("../lib/Intern");

describe("school", () => {
  it("School name of intern is returned by getSchool", () => {
    const int = new Intern("Jack", "12", "jack@gmail.com", 'GT');
    expect(int.getSchool()).toBe("GT");

    int.school = "Georgia Tech";
    expect(int.getSchool()).toBe("Georgia Tech");
  });
});

describe("Role", () => {
    it("Role of intern is returned by getRole", () => {
      const int = new Intern("Jack", "12", "jack@gmail.com", 'GT');
      expect(int.getRole()).toBe("Intern");
    });
  });