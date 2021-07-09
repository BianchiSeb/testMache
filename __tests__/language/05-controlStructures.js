describe("Control structures", () => {
  it("Control structures - 1", () => {
    var result = false;
    if (2 > 0) {
      result = true;
    }
    expect(result).toBe(true);
  });

  it("Control structures - 2", () => {
    var fruit = true ? "orange" : "banana";
    expect(fruit).toBe("orange");
  });

  it("Control structures - 3", () => {
    var result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1 + 1:
        result = 2;
        break;
    }
    expect(result).toBe(2);
  });

  it("Control structures - 4", () => {
    var result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
        break;
      default:
        result = "Merry";
        break;
    }
    expect(result).toBe("Merry");
  });

  it("Control structures - 5", () => {
    var result = "Pippin";
    switch ("s") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
      default:
        result = "Merry";
        break;
    }
    expect(result).toBe(_);
  });

  it("Control structures - 6", () => {
    var fruit = null || "banana";
    expect(fruit).toBe(_);

    var myFavouriteFruit = fruit || "apple";
    expect(myFavouriteFruit).toBe(_);
  });
});
