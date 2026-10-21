// Shopping cart — kept in memory for the demo.
export const cart = [];

export function addItem(product, quantity = 1) {
  const line = cart.find((l) => l.id === product.id);
  if (line) line.quantity += quantity;
  else cart.push({ ...product, quantity });
  return cart;
}

// Recalculate on every change so the total follows the quantity.
export const total = () => cart.reduce((sum, l) => sum + l.price * l.quantity, 0);
