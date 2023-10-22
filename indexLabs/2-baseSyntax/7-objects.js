'use strict';

const fn = () => {
  const constObject = {
    name: 'Ivan',
  };

  let varObject = {
    name: 'Ivan',
  };

  constObject.name = 'Marcus';
  varObject = constObject;
  return varObject;
};

module.exports = { fn };
