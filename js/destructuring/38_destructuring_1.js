(function(){

// es5 
var expense = {
  type: 'business',
  amount: '$45'
};
/*
var type = expense.type;
var amount = expense.amount;
*/

// es6
// individual declaration
/*
const { type } = expense;
const { amount } = expense;
*/
//console.log(type); // business
//console.log(amount); // $45

// or even in a single line
const { type, amount } = expense;
//console.log(type); // business
//console.log(amount); // $45

})();