describe("Testing", () => {
  function countNucleobases(dna = "") {
    const bases = {};

    for (let i = 0; i < dna.length; i += 2) {
      const current = dna.substr(i, 2);
      if (!bases[current]) {
        bases[current] = 1;
      } else {
        bases[current]++;
      }
    }

    return bases;
  }

  // Exemple:
  countNucleobases("atgccgatgactgact"); //  { at: 2, gc: 1, cg: 1, ga: 2, ct: 2 }

  // Write some tests !
  it("Testing - 1", () => {
    let result = countNucleobases("atatgccgatgactgact");
    expect(result).toEqual({ "at": 3, "gc": 1, "cg": 1, "ga": 2, "ct": 2 });
  });
});
