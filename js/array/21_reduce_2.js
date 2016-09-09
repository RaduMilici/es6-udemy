(function(){

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// 'accumulator' is just the second param, in this case '[]'
// it gets called every time
var arr = primaryColors.reduce(function(accumulator, primaryColor){
  accumulator.push(primaryColor.color);
  return accumulator; 
}, []);

//console.log(arr);

})(); 