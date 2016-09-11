(function(){

// check if parans are balanced
var p = '(())';

var arr =  p.split('').reduce(function(accumulator, char, i){

  if(accumulator < 0)
    return accumulator;
  if(char === '(')
    accumulator++;
  if(char === ')')
    accumulator--;
    
  return accumulator;
}, 0);

//console.log('parens are balanced: ', arr === 0);

})(); 