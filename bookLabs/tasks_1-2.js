'use strict';

const items = [
  { price: 40 },
  { price: 120 },
  { price: 505 },
  { price: 350 },
];

for (const item of items) {
  console.log(`Price: ${item.price}`);
}

function getTotalPrice(goods) {
  let total = 0;

  for (const { price } of goods) {
    if (typeof price === 'number' && price >= 0) {
      total += price;
    } else {
      throw Error(`${price} isn't a number or it is negative`);
    }
  }

  return total;
}

const totalPrice = getTotalPrice(items);
console.log(`Total price of items is ${totalPrice}`);
