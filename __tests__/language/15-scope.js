describe("Scopes", () => {
  variable = 42;

  it("Scopes - 1", () => {
    expect(variable).toBe(42);
  });

  it("Scopes - 2", () => {
    var fruit = "banana";

    (function() {
      var anotherFruit = "orange";
      expect(fruit).toBe(_);
      expect(anotherFruit).toBe(_);
    })();

    expect(fruit).toBe(_);
    expect(typeof anotherFruit).toBe(_);
  });
});
