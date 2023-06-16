function hasValidProperties(obj) {
  for (let key in obj) {
    const value = obj[key];
    const type = typeof value;
    if (
      type !== "string" &&
      type !== "number" &&
      type !== "boolean" &&
      type !== "undefined" &&
      type === "object" &&
      value !== null
    ) {
      return false;
    }
  }

  return true;
}

const deepEqual = (a, b) => {
  // false if object contains other than string/boolean/number
  if (!hasValidProperties(a) || !hasValidProperties(b)) {
    console.log("wrong object!");
    return false;
  }

  // The objects themselves could be null or undefined.
  if ((a === undefined || a === null) && a !== b) {
    return false;
  }

  const objMerged = { ...a, ...b }; // merge two objects in order to get all possible keys
  for (let key in objMerged) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

module.exports = { deepEqual, hasValidProperties };
