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

  it("write-test - 1", () => {
    expect(countNucleobases("atgccgatgactgact").at).toBe(2);
  });
});
