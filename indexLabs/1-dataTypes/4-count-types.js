'use strict';

const countTypesInArray = (array) => {
  const hash = {};
  for (const elem of array) {
    const type = typeof elem;
    if (hash[type] === undefined) {
      hash[type] = 0;
    }
    hash[type]++;
  }
  return hash;
};

module.exports = { countTypesInArray };
