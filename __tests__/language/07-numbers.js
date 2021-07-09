describe("Numbers", () => {
  it("Numbers - 1", () => {
    var typeOfIntegers = typeof 6;
    var typeOfFloats = typeof 3.14159;
    expect(typeOfIntegers === typeOfFloats).toBe(_);
    expect(typeOfIntegers).toBe(_);
    expect(1.0 === _).toBe(true);
  });

  it("Numbers - 2", () => {
    var result = 7 / "beers";
    expect(isNaN(result)).toBe(_);
    expect(result == NaN).toBe(_);
  });

  it("Numbers - 3", () => {
    var result = 7 / "7";
    expect(isNaN(result)).toBe(_);
    expect(result).toBe(_);
  });

  it("Numbers - 4", () => {
    // indice: partir de 42, base 16
    expect(_).toBe("2a");
  });

  it("Numbers - 5", () => {
    var pi = Math.PI;
    expect(~~pi).toBe(_);
  });
});
