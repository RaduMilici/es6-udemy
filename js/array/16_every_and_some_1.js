(function(){

var computers = [
  { name: 'apple', ram: 24 },
  { name: 'acer', ram: 32 },
  { name: 'compaq', ram: 4 },
];

var allCanRun = true; 
var onlySomeCanRun = false;
var minRam = 16;

// es5
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if(computer.ram < minRam)
    allCanRun = false;
  else 
    onlySomeCanRun = true;
}
//console.log("all can run: ", allCanRun);       // false
//console.log("some can run: ", onlySomeCanRun); // true

// es6
// true && true && false = false
allCanRun = computers.every(function(computer){  
  return computer.ram > minRam;
});

// true || true || false = true
onlySomeCanRun = computers.some(function(computer){ 
  return computer.ram > minRam;
});

//console.log("all can run: ", allCanRun);       // false
//console.log("some can run: ", onlySomeCanRun); // true

var names = [ 'radu', 'rusu', 'putin' ];

names.every(function(name){
  return name.length > 4; //false
});

names.some(function(name){
  return name.length > 4; //true
}); 

})();
