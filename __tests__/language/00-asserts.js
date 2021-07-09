describe("About test assertions: ", () => {
  it("you should know what will satisfy the toBeTruthy assertion", () => {
    expect(true).toBeTruthy();
  });

  it("you should know what will satisfy the toBeFalsy assertion", () => {
    expect(false).toBeFalsy();
  });

  it("you should know what will satisfy the toBe assertion", () => {
    expect('3').toBe("3");
  });

  it("you should know what will satisfy the not assertion", () => {
    expect('1').not.toBe("3");
  });
});
