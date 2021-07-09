describe("Operators", () => {
  it("Operators - 1", () => {
    var result = 0;
    for (let i = 0; i <= 3; i++) {
      result = result + i;
    }
    expect(result).toBe(6);
  });

  it("Operators - 2", () => {
    var result = 0;
    for (let i = 0; i <= 3; i++) {
      result += i;
    }
    expect(result).toBe(6);
  });

  it("Operators - 3", () => {
    var result = 3;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    expect(result).toBe(0);
  });

  it("Operators - 4", () => {
    var result = 3;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    expect(result).toBe(0);
  });

  it("Operators - 5", () => {
    var result = 11;
    var x = 5;
    result %= x;
    expect(result).toBe(1);
  });

  it("Operators - 6", () => {
    var result = 2 * 5 + 90 / 2 - 13;
    expect(result).toBe(42);
  });

  it("Operators - 7", () => {
    // prettier-ignore
    var result = true && true || false && false;
    expect(result).toBe(true);
  });

  it("Operators - 8", () => {
    // prettier-ignore
    var result = false && true || true && true;
    expect(result).toBe(true);
  });

  it("Operators - 9", () => {
    var result = [];
    var log = function(label, value) {
      result.push(label);
      return value;
    };

    for (
      let i = log("Start", 0);
      i < log("Condition", 1);
      i = log("Increment", i + 1)
    ) {
      log("Body");
    }

    expect(result[0]).toBe(_);
    expect(result[1]).toBe(_);
    expect(result[2]).toBe(_);
    expect(result[3]).toBe(_);
    expect(result[4]).toBe(_);
  });
});
