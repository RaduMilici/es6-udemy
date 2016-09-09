(function(){

var colors = ['red', 'blue', 'green'];

// es5
for(var i = 0; i < colors.length; i++)
  //console.log(colors[i]);

// es6
colors.forEach(function(color, i, array){
  //console.log(color, i, array);
});

})();