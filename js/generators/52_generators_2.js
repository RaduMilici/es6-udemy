(function(){

function* shopping(){
  const stuff = yield 'cash';
  const otherStuff = yield 'laundry';

  return [ stuff, otherStuff ];
}

const gen = shopping();
//console.log(gen.next()); // {value: "cash", done: false}
//console.log(gen.next()); // {value: "laundry", done: false}
//console.log(gen.next()); // {value: [ stuff, otherStuff ], done: true}

})();