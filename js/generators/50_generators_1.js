(function(){

function* shopping(){
  const stuffFromStore = yield 'cash';
  return stuffFromStore;
}

const gen = shopping();

//console.log(gen.next()); // {value: "cash", done: false}
//console.log(gen.next()); // {value: undefined, done: true}

})();