describe("This", () => {
  it("This - 1", () => {
    var person = {
      name: "bob",
      intro() {
        return "Hello, my name is " + this.name;
      },
    };
    expect(person.intro()).toBe("Hello, my name is bob");
  });

  it("This - 2", () => {
    var person = {
      name: "bob",
      intro() {
        return "Hello, my name is " + this.name;
      },
    };

    var alias = person.intro;
    person.name = "Peter";
    expect(person.intro()).toBe("Hello, my name is Peter");
  });

  it("This - 3", () => {
    var person = {
      name: "bob",
      intro() {
        return "Hello, my name is " + this.name;
      },
    };

    var message = person.intro.call(person, person.name = "Frank");
    expect(message).toBe("Hello, my name is Frank");
  });
});
