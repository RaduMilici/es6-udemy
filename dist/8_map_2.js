'use strict';

var cars = [{ model: 'Citroen', price: 2000 }, { model: 'Fiat', price: 2500 }];

// 'pluck'ing a property off each object
var prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);