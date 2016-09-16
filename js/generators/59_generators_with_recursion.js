(function(){

class Comment{
  constructor(content, children){
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator](){
    yield this.content;
    for(let child of this.children){
      yield* child;
    }
  }
}

const children = [
  new Comment('lol', []), 
  new Comment('kek', []), 
  new Comment('bur', []),
  new Comment('downvote', [])
];

const tree = new Comment('hehe', children);
const values = [];

for(let value of tree){
  values.push(value);
}

//console.log(values);

})();