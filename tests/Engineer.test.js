const Engineer = require("../lib/Engineer");

describe("github", () => {
  it("Github username of employee is returned by getGithub", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", 'jackjackson');
    expect(eng.getGithub()).toBe("jackjackson");

    eng.github = "jack_jackson";
    expect(eng.getGithub()).toBe("jack_jackson");
  });
});

describe("Role", () => {
    it("Role of employee is returned by getRole", () => {
      const eng = new Engineer("Jack", "12", "jack@gmail.com", 'jackjackson');
      expect(eng.getRole()).toBe("Engineer");
    });
  });