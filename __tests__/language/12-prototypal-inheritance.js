describe("Prototype inheritance", () => {
  function Mammal(name) {
    this.name = name;
  }

  Mammal.prototype = {
    sayHi() {
      return "Hello, my name is " + this.name;
    },
  };

  var eric = new Mammal("Eric");

  it("Prototype inheritance - 1", () => {
    expect(eric.sayHi()).toBe("Hello, my name is Eric");
  });

  Mammal.prototype.favouriteSaying = function() {
    return `${this.name}'s favourite saying is ${this.sayHi()}`;
  };

  it("Prototype inheritance - 2", () => {
    var bobby = new Mammal("Bobby");
    expect(eric.favouriteSaying()).toBe("Eric's favourite saying is Hello, my name is Eric");
    expect(bobby.favouriteSaying()).toBe("Bobby's favourite saying is Hello, my name is Bobby");
  });

  it("Prototype inheritance - 3", () => {
    var paul = new Mammal("Paul");
    Object.defineProperty(Mammal.prototype, "numberOfLettersInName", {
      get() {
        return this.name.length;
      },
    });
    expect(paul.numberOfLettersInName).toBe(_);
  });

  function extend(child, supertype) {
    child.prototype = Object.create(supertype.prototype);
  }

  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  extend(Bat, Mammal);

  it("Prototype inheritance - 4", () => {
    var lenny = new Bat("Lenny", "1.5m");
    expect(lenny.sayHi()).toBe(_);
    expect(lenny.wingspan).toBe(_);
  });
});
