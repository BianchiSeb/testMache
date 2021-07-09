describe("Arrays", () => {
  it("Arrays - 1", () => {
    var collection = new Array("meaning of life", 42, true);
    expect(collection[0]).toBe("meaning of life");
    expect(collection[1]).toBe(42);
    expect(collection[2]).toBe(true);
  });

  it("Arrays - 2", () => {
    expect(typeof []).toBe("object");
  });

  it("Arrays - 3", () => {
    var collection = ["a", "b", "c"];
    expect(collection.length).toBe(3);
  });

  it("Arrays - 4", () => {
    var daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    var workingWeek = daysOfWeek.splice(0, 5);
    expect(daysOfWeek).toEqual([
      "Saturday",
      "Sunday",
    ]);
    expect(workingWeek).toEqual([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ]);
  });

  it("Arrays - 5", () => {
    var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var odd = collection.filter((elem)=>elem%2==1);
    expect(odd).toEqual([1, 3, 5, 7, 9]);
  });

  it("Arrays - 6", () => {
    var collection = [1, 2, 3, 4];
    var result = collection.reduce((elem,sum)=>sum * elem);
    expect(result).toBe(24);
  });

  it("Arrays - 7", () => {
    var collection = [1, 2, 3];
    expect(collection.map((elem)=>elem*2)).toEqual([2, 4, 6]);
  });

  it("Arrays - 8", () => {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    expect(array1.concat(array2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect([...array1, ...array2 ]).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Arrays - stack methods", () => {
    var stack = [];
    stack.push("first");
    stack.push("second");
    expect(stack.pop()).toBe(_);
    expect(stack.pop()).toBe(_);
  });
});
