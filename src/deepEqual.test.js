const { expect } = require("chai");
const { deepEqual, hasValidProperties } = require("./deepEqual");

describe("hasValidProperties", () => {
  it("should return true for an object with valid properties", () => {
    const obj = {
      prop1: "value1",
      prop2: 123,
      prop3: true,
      prop4: undefined,
      prop5: null,
    };

    expect(hasValidProperties(obj)).to.be.true;
  });

  it("should return false for an object with invalid properties", () => {
    const obj = {
      prop1: "value1",
      prop2: 123,
      prop3: true,
      prop4: [],
      prop5: { nestedProp: "nestedValue" },
    };

    expect(hasValidProperties(obj)).to.be.false;
  });
});

describe("deepEqual", () => {
  it("null, null should return true", () => {
    const obj1 = null;
    const obj2 = null;

    expect(deepEqual(obj1, obj2)).to.be.true;
  });

  it("null, {} should return false", () => {
    const obj1 = null;
    const obj2 = {};

    expect(deepEqual(obj1, obj2)).to.be.false;
  });

  it("{name: 'Bob'}, {name: 'Bob'} should return true", () => {
    const obj1 = { name: "Bob" };
    const obj2 = { name: "Bob" };

    expect(deepEqual(obj1, obj2)).to.be.true;
  });

  it("{name: 'Bob', email: undefined}, {name: 'Bob'} should return true", () => {
    const obj1 = { name: "Bob", email: undefined };
    const obj2 = { name: "Bob" };

    expect(deepEqual(obj1, obj2)).to.be.true;
  });

  it("{name: 'Bob', email: 'bob@example.com'}, {name: 'Bob'} should return false", () => {
    const obj1 = { name: "Bob", email: "bob@example.com" };
    const obj2 = { name: "Bob" };

    expect(deepEqual(obj1, obj2)).to.be.false;
  });

  it("should return true for equal objects with valid properties", () => {
    const obj1 = {
      prop1: "value1",
      prop2: 123,
      prop3: true,
      prop4: undefined,
      prop5: null,
    };

    const obj2 = {
      prop1: "value1",
      prop2: 123,
      prop3: true,
      prop4: undefined,
      prop5: null,
    };

    expect(deepEqual(obj1, obj2)).to.be.true;
  });

  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });
});
