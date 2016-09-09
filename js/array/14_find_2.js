(function(){

function Car(model, id){
  this.model = model;
  this.id = id;
}

var cars = [
  new Car('Citroen', 0),
  new Car('Fiat', 1),
  new Car('Saab', 2)
];
var driver = { name: 'Radu', id: 0};
var carByName = cars.find(function(car){
  return car.model === 'Citroen';
});

var carById = cars.find(function(car){
  return car.id === driver.id;
});

//console.log('car by name: ', carByName);
//console.log('car by id: ', carById);

})();