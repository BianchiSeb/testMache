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

    window.name = "Peter";

    expect(person.intro.call({name:"Peter"})).toBe("Hello, my name is Peter");
  }); //pas bon

  it("This - 3", () => {
    var person = {
      name: "bob",
      intro() {
        return "Hello, my name is " + this.name;
      },
    };

    var message = person.intro.call({name:"Frank"});
    expect(message).toBe("Hello, my name is Frank");
  });
});
