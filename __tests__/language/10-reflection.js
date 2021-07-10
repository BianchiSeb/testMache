describe("Reflection : ", () => {
  it("Reflection - 1", () => {
    var keys = [];
    var values = [];
    var person = { name: "Thierry LAU", age: 30, unemployed: true };
    for (const propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    expect(keys).toEqual(["name", "age", "unemployed"]);
    expect(values).toEqual(["Thierry LAU", 30, true]);
  });

  function A() {
    this.aprop = "A";
  }

  function B() {
    this.bprop = "B";
  }

  B.prototype = new A();

  it("Reflection - 2", () => {
    var b = new B();

    var keys = [];
    for (propertyName in b) {
      keys.push(propertyName);
    }
    expect(keys.length).toBe(1);
    expect(keys).toEqual("B");

    var ownKeys = [];
    for (propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }
    expect(ownKeys.length).toBe(2);
    expect(ownKeys).toEqual("bb");
  });

  it("Reflection - 3", () => {
    var a = new A();
    var b = new B();
    expect(typeof a.constructor).toBe("function");
    expect(a.constructor.name).toBe("A");
    expect(b.constructor.name).toBe("A");
  });
});
