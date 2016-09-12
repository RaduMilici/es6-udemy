(function(){

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 13240
};

//works with any number of args
function fileSummary({name = "ifNameIsUndefined", extension, size}, { color }){
  return `The file ${name}.${extension} is of size ${size} kb.
  Also the color is ${color}.`;
}

//console.log(fileSummary(savedFile, {color: 'red'}));

})();