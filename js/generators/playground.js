(function(){

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json => json)
.then(x => console.log(x));
*/

function* Test(){
  var kind = yield 'polar';
  console.log(kind + 'a');
  yield kind;
  console.log(kind);
}

const gen = Test();
//console.log(gen.next());
//console.log(gen.next('radu'));
//console.log(gen.next());


})();