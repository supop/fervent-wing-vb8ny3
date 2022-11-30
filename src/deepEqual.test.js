const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it.skip("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });
});
