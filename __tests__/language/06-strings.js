describe("Strings", () => {
  it("Strings - 1", () => {
    // prettier-ignore
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    expect(singleQuotedString === doubleQuotedString).toBe(true);
    expect(typeof singleQuotedString).toBe("string");
    expect(typeof doubleQuotedString).toBe("string");
  });

  it("Strings - 2", () => {
    var fruit = "apple";
    var dish = "pie";
    expect(_).toBe("apple pie."); // Use concatenation
    expect(_).toBe("apple pie."); // Use template strings
  });

  it("Strings - 3", () => {
    var characterType = typeof "Amory".charAt(1);
    expect(characterType).toBe(_);
  });

  it("Strings - 4", () => {
    var result = "hello";
    expect(result.length).toBe(_);
  });

  it("Strings - 5", () => {
    var fruit = "pineapples";
    expect(fruit.slice(_, _)).toBe("apple");
  });
});
