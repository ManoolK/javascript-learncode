// Exporting module
console.log('Exporting module');

const shippingCost = 0;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Named export
export { totalPrice, totalQuantity as tq };

// Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
