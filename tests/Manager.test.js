const Manager = require("../lib/Manager");

describe("Role", () => {
    it("Role of manager is returned by getRole", () => {
      const man = new Manager("Jack", "12", "jack@gmail.com", '103');
      expect(man.getRole()).toBe("Manager");
    });
  });