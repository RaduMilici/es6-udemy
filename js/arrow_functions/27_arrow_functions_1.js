(function(){

// es5  
const addEs5 = function(a, b){
  return a + b;
}

// es6
// regular
const add = (a, b) => {
  return a + b;
}

// no brackets, only works on return single statement
const noBrackets = (a, b) => a + b;

// no parans either, only works on single param
const noParans = a => a * 2;

// no ards stil require params
const noArgs = () => 2;

// works well with array helpers
const numbers = [ 1, 2, 3 ];
const doubledNumbers = numbers.map(number => number * 2);
//console.log(doubledNumbers); 

})();