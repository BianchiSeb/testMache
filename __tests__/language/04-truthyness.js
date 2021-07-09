describe("Truthyness", () => {
  function isTruthy(value) {
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  it("Truthyness - 1", () => {
    expect(isTruthy(3)).toBe(true);
  });

  it("Truthyness - 2", () => {
    expect(isTruthy(-1)).toBe(true);
  });

  it("Truthyness - 3", () => {
    expect(isTruthy(0)).toBe(false);
  });

  it("Truthyness - 4", () => {
    expect(isTruthy(null)).toBe(false);
  });

  it("Truthyness - 5", () => {
    expect(isTruthy(undefined)).toBe(false);
  });

  it("Truthyness - 6", () => {
    expect(isTruthy(new Boolean(false))).toBe(true);
  });

  it("Truthyness - 7", () => {
    expect(new Boolean(false)._()).toBe(false);
  });

  it("Truthyness - 8", () => {
    expect(new Boolean(false) == false).toBe(_);
  });
});
