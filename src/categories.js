// Browse products by category.
export const categories = ['Bags', 'Mugs', 'Stationery'];
export const byCategory = (products, c) => products.filter((p) => p.category === c);
