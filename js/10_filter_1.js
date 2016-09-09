var products = [
  {name: 'tomato', type: 'vegetable'},
  {name: 'orange', type: 'fruit'},
  {name: 'apple', type: 'fruit'},
  {name: 'lettuce', type: 'vegetable'},
]; 
var filteredProducts = [];

// es5
for (var i = 0; i < products.length; i++){
  if(products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts); 

// es6
filteredProducts = products.filter(function(product, i, array){
  //console.log(i, array)
  return product.type === 'vegetable';
});

console.log(filteredProducts);
