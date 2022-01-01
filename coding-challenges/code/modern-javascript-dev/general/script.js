// Importing module
// import { addToCart, totalPrice as price, quantity } from './shoppingCart';

import * as ShoppingCart from './shoppingCart';

console.log('Importing module');

ShoppingCart.addToCart('bread', 5);

console.log(price, quantity);

// This is kind of preferred.
// Good practice to have only one default export
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

const ShoppingCart2 = (function () {
  // function should only be created once
  // create a new scope and return data
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to a cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // closures are coming into play here
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);

/*
In node js
// Export 
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to a cart`);
  };

// Import
const {addToCart} = require('./shoppingCart.js');
*/

/*
NPM - Node package manager

npm install will look at teh package.json and just install all of those bundles out of the gate
*/

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 7,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

/*
How to use Parcel and NPM Scripts


*/

// This code is fantastic for keeping state
if (module.hot) {
  module.hot.accept();
}
