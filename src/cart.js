// Shopping cart — kept in memory for the demo.
export const cart = [];

export function addItem(product) {
  cart.push({ ...product, quantity: 1 });
  return cart;
}
