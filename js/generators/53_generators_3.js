(function(){

function* colors(){
  yield 'red';
  yield 'green';
  yield 'blue';
}

/*
const gen = colors();
console.log(gen.next()); // {value: "red", done: false}
console.log(gen.next()); // {value: "green", done: false}
console.log(gen.next()); // {value: "blue", done: false}
console.log(gen.next()); // {value: undefined, done: true}
*/

const myColors = [];
for (let color of colors()){ // > red
  //console.log(color);        // > green
  myColors.push(color);      // > blue
}                            

})();