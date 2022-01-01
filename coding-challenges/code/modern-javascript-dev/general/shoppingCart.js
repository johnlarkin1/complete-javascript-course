// Exporting module
console.log('Exporting module');

// All top level variables are private
// and scoped to the current module
const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to a cart`);
};

const totalPrice = 237;
const totalQuantity = 10;

export { totalPrice, totalQuantity as quantity };

// You can give it any name
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to a cart`);
}
