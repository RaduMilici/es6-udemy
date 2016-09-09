'use strict';

var colors = ['red', 'blue', 'green', 'yellow'];

// es5
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} // es6
colors.forEach(function (color) {
  console.log(color);
});