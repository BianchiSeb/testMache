describe("Objects", () => {
  it("Objects - 1", () => {
    var result = {};
    expect(typeof result).toBe("object");
  });

  it("Objects - 2", () => {
    var person = {
      name: true,
      age: 51
    };
    expect("name" in person).toBe(true);
    expect(person.age).toBe(51);
  });

  it("Objects - 3", () => {
    var person = {};
    Object.assign(person, {"name":"Jean Paul", "phone-number":"0145254515"});
    expect(person.name).toBe("Jean Paul");
    person; // _
    expect(person["phone-number"]).toBe("0145254515");
  });

  it("Objects - 4", () => {
    var person = {
      name: "Jean Paul",
      age: 25,
      toString: function() {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
      },
    };
    expect(person.toString()).toBe(
      "My name is Jean Paul and I am 25 years old.",
    );
  });

  it("Objects - 5", () => {
    var person = {
      firstname: "Jon",
      lastname: "Snow",
      knows(something) {
        return false;
      },
      // _
    };
    expect(person.fullname).toBe("Jon Snow");
    person.firstname = "Aegon";
    person.lastname = "Targaryen";
    expect(person.fullname).toBe("Aegon Targaryen");
  });
});
