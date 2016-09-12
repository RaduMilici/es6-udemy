(function(){

const defaultColors = [ 'red', 'green' ];
const favouriteColors = [ 'orange', 'yellow' ];
const fallColors = [ 'brown', 'blue' ];

const colors = [...defaultColors, ...favouriteColors];
//console.log(colors); // ["red", "green", "orange", "yellow"]

//--------------------------------------------------------------
function validateShoppingList(...items){
  if(!items.find((item) => item === 'milk')){
    console.log('forgot milk!');
    return ['milk', ...items];
  }
   
}

//validateShoppingList('oranges', 'bread', 'eggs');

})();