(function(){

var numbers = [ 1, 2, 3, 4, 5 ];
var sum = 0;

numbers.forEach(addToSum);

function addToSum(number){
  sum += number;
}

//console.log(sum);

})();