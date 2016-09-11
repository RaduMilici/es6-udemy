(function(){

let a = 1;
var x = 3;

if(true){
  let a = 2; // different a
  var x = 4; // same x
  //console.log('inner "a"', a); // 2
  //console.log('inner "x"', x); // 4
}

//console.log('outer "a"', a);   // 1
//console.log('outer "x"', x);   // 4

})();