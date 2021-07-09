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
  var resultNucleose = countNucleobases("atgccgatgactgact"); //  { at: 2, gc: 1, cg: 1, ga: 2, ct: 2 }

  // Write some tests !
  it("Check Size - 1", () => {
    var count = 0;

    for(var prop in resultNucleose) {
        if(resultNucleose.hasOwnProperty(prop))
            count += 1;
    }
    expect(count).toBe(5);
  });

  it("Check Correct Key/Value - 2", () => {
    expect(resultNucleose["at"]).toBe(2);
    expect(resultNucleose["gc"]).toBe(1);
    expect(resultNucleose["ct"]).toBe(2);
  });


});
