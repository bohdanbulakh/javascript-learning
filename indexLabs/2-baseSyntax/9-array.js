'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380978272819' },
  { name: 'Ahmed', phone: '+380999999999' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
