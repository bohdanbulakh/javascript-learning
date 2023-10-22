'use strict';

const phonebook = {
  'Marcus': '+380978272819',
  'Ahmed': '+380999999999',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
