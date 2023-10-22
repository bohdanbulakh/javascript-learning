'use strict';

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'Flash drive', price: 70 },
    { name: 'Smartphone', price: 1200 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
    { name: 'T-shirt', price: 100 },
  ],
  Food: [
    { name: 'Bananas', price: 10 },
    { name: 'Apples', price: 15 },
    { name: 'Juice', price: 20 },
    { name: 'Sausages', price: 40 },
    { name: 'Bananas', price: 15 },
    { name: 'Cheese', price: 35 },
  ],
  Furniture: [
    { name: 'Table', price: 1000 },
    { name: 'Chair', price: 500 },
  ]
};


const find = (goods, name) => {
  const result = [];

  for (const goodsGroup in goods) {
    for (const product of goods[goodsGroup]) {
      if (product.name === name) {
        result.push(product);
      }
    }
  }

  return result;
};

const result = find(purchase, 'Bananas');
console.log(result);
