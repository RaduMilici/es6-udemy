(function(){

class Comment{
  constructor(content, children){
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment('lol', []), 
  new Comment('kek', []), 
  new Comment('bur', [])
];

const tree = new Comment('hehe', children);
console.log(tree); 

})();