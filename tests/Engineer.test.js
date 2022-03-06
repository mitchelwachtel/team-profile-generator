const Engineer = require("../lib/Engineer");

describe("github", () => {
  it("Github username of engineer is returned by getGithub", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", "jackjackson");
    expect(eng.getGithub()).toBe("jackjackson");

    eng.github = "jack_jackson";
    expect(eng.getGithub()).toBe("jack_jackson");
  });
});

describe("Role", () => {
  it("Role of engineer is returned by getRole", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", "jackjackson");
    expect(eng.getRole()).toBe("Engineer");
  });
});

describe("Name", () => {
  it("Name of engineer is returned by getName", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", "jackjackson");
    expect(eng.getName()).toBe("Jack");

    eng.name = "Jackson";
    expect(eng.getName()).toBe("Jackson");
  });
});

describe("Id", () => {
  it("Id of engineer is returned by getId", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", "jackjackson");
    expect(eng.getId()).toBe("12");

    eng.id = "13";
    expect(eng.getId()).toBe("13");
  });
});

describe("Email", () => {
  it("Email of engineer is returned by getEmail", () => {
    const eng = new Engineer("Jack", "12", "jack@gmail.com", "jackjackson");
    expect(eng.getEmail()).toBe("jack@gmail.com");

    eng.email = "jack@yahoo.com";
    expect(eng.getEmail()).toBe("jack@yahoo.com");
  });
});
