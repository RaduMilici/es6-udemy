var products = [
  {name: 'tomato', type: 'vegetable', quantity: 10, price: 4},
  {name: 'orange', type: 'fruit', quantity: 0, price: 12},
  {name: 'apple', type: 'fruit', quantity: 5, price: 6},
  {name: 'lettuce', type: 'vegetable', quantity: 30, price: 10}
]; 
var filteredProducts = [];

filteredProducts = products.filter(function(product){
  return product.type === 'vegetable' && 
  product.quantity > 0 && 
  product.price < 10;
});

console.log(filteredProducts); // [{the tomato object}]
