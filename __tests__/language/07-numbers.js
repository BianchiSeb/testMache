describe("Numbers", () => {
  it("Numbers - 1", () => {
    var typeOfIntegers = typeof 6;
    var typeOfFloats = typeof 3.14159;
    expect(typeOfIntegers === typeOfFloats).toBe(true);
    expect(typeOfIntegers).toBe("number");
    expect(1.0 === 1.0).toBe(true);
  });

  it("Numbers - 2", () => {
    var result = 7 / "beers";
    expect(isNaN(result)).toBe(true);
    expect(result == NaN).toBe(false);
  });

  it("Numbers - 3", () => {
    var result = 7 / "7";
    expect(isNaN(result)).toBe(false);
    expect(result).toBe(1);
  });

  it("Numbers - 4", () => {
    // indice: partir de 42, base 16
    expect((42).toString(16)).toBe("2a");
  });

  it("Numbers - 5", () => {
    var pi = Math.PI;
    expect(~~pi).toBe(3);
  });
});
