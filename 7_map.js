var numbers = [1, 2, 3];

// es5
// make a new array to avoid 'mutation' - modifying the original data, in this 
// case the 'numbers' array
var doubledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // [ 2, 4, 6 ]

// es 6
var doubled = numbers.map(function(number){
  return number * 2;
});

console.log(doubled); // [ 2, 4, 6 ]