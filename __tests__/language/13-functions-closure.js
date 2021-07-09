describe("Functions and Closure", () => {
  it("Functions and Closure - 1", () => {
    var result = "a";
    function changeResult() {
      result = "b";
    }
    changeResult();
    expect(result).toBe("b");
  });

  it("Functions and Closure - 2", () => {
    var action = nb => {return nb * 3};
    expect(action(4)).toBe(12);
  });

  it("Functions and Closure - 3", () => {
    var value = "orange";

    (function(val) {
      var anotherValue = "blue";
      expect(val).toBe("orange");
      expect(typeof value).toBe("string");
      expect(typeof anotherValue).toBe("string");
    })(value);

    expect(typeof anotherValue).toBe("undefined");
    expect(typeof value).toBe("string");
  });

  it("Functions and Closure - 4", () => {
    function add(...args) {
      var total = 0;
      for (const arg of args) {
        // complete the implementation of this method so that it returns the sum of its arguments
        total += arg;
      }
      return total;
    }

    expect(add(1, 2, 3, 4, 5)).toBe(15);
    expect(add(4, 7, -2)).toBe(9);
  });

  it("using call to invoke function", () => {
    var invokee = function(message) {
      return this + message;
    };

    var result = invokee.call("I am this!", "Where did it come from?");

    expect(result).toBe("I am this!Where did it come from?");
  });

  it("using apply to invoke function", () => {
    var invokee = function(message1, message2) {
      return this + message1 + message2;
    };

    var result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);

    expect(result).toBe("I am this!I am arg1I am arg2");
  });
});
