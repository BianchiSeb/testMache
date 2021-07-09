describe("Coercion", () => {
  it("Coercion - 1", () => {
    expect(3 + 7 === 10).toBe(true);
  });

  it("Coercion - 2", () => {
    expect(3 + 7 == "10").toBe(true);
  });

  it("Coercion - 3", () => {
    expect(1 == true).toBe(true);
  });

  it("Coercion - 4", () => {
    expect(new Date(3) + 7 == "10").toBe(false);
  });

  it("Coercion - 5", () => {
    expect("3" + 7 == "37").toBe(true);
  });

  it("Coercion - 6", () => {
    expect(["3"] + ["7"] == 37).toBe(true);
  });

  it("Coercion - 7", () => {
    expect(typeof (/3/ + 7)).toBe("string");
  });

  it("Coercion - 8", () => {
    expect(1 + true === "1true").toBe(false);
  });

  it("Coercion - 9", () => {
    expect(+"3" + +"7" == "37").toBe(false);
  });

  it("Coercion - 10", () => {
    expect("3" + "7" == 37).toBe(_);
  });
});
