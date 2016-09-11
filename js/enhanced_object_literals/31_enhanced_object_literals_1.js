(function(){

// es5
function createBookShop(inventory){
  return{
    inventory: inventory,
    inventoryValue: function(){
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0);
    },
    priceForTitle: function(title){
      return this.inventory.find((book) => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Fellowship of the Ring', price: 10 },
  { title: 'The Two Towers', price: 10 },
  { title: 'Return of the King', price: 15 }
];
/*
const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue()); // 35
console.log(bookShop.priceForTitle('Return of the King')); // 15
*/

// es6
function createBookShop_es6(inventory){
  return{
    inventory,            // key value pair is written once, if identical
    inventoryValue(){     // can drop the function keyword 
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0);
    },
    priceForTitle(title){ // can drop the function keyword 
      return this.inventory.find((book) => book.title === title).price;
    }
  };
}
/*
const bookShop2 = createBookShop_es6(inventory);
console.log(bookShop2.inventoryValue()); // 35
console.log(bookShop2.priceForTitle('Return of the King')); // 15
*/
})();