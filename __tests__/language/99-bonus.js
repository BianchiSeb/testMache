describe("JavaScript: The Other Parts", () => {
  it("Bonus 1: scope extra", () => {
    //_ (Math)
    var PI = Math.PI;
    var cos = (nb) => { return Math.cos(nb)}
    {
      expect(cos(PI)).toBe(-1);
    }
  });

  it("Bonus 2: syndrome des points-virgules", () => {
    function f() {
      return;
      ("done");
    }
    expect(f()).toBe(_);
  });

  it("Bonus 3: décalage horaire", () => {
    var aujourdhui = new Date(2017, _, 22);
    expect(aujourdhui.toLocaleDateString()).toBe("22/09/2017");
  });

  it("Bonus 4: l'épouvantail de Crockford", () => {
    var edibleMath = { cos: x => x + "zza", PI: "pi" };
    with (edibleMath) {
      expect(cos(PI)).toBe(_);
      sin = x => x + "ment";
      expect(sin(PI)).toBe(_);
    }
    expect(typeof edibleMath.sin).toBe(_);
  });

  it("Bonus 5: je suis falsy… qui suis-je ?", () => {
    var thing = _;
    expect(thing).toBeFalsy();
    expect(+thing).toBe(0);
    expect(typeof thing).toBe("object");
  });

  it("Bonus 6: je suis truthy… qui suis-je ?", () => {
    var thing = _;
    expect(thing).toBeTruthy();
    expect(+thing).toBe(0);
    expect(String(thing).length).toBe(39);
    expect(typeof thing).toBe("object");
  });

  it("Bonus 7: do you even emoji bro ?", () => {
    var person = "👦🏻".replace("🏻", "🏿");
    var family = ["👩", "‍", "👩", "‍", "👦"].reduce(
      (prev, curr) => prev + curr,
    );

    expect(person).toEqual(_);
    expect(family).toEqual(_);
  });
});
