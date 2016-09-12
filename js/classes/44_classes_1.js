(function(){

// es5
function Car(options){
  this.title = options.title;
}

Car.prototype.drive = function(){
  console.log('driving');
};

function Citroen(options){
  Car.call(this, options);
  this.color = options.color;
}

Citroen.prototype = Object.create(Car.prototype);
Citroen.prototype.constructor = Citroen;

Citroen.prototype.honk = function(){
  console.log('beep beep'); 
};

const car = new Citroen({ title: 'C3', color: 'silver' });
//console.log(car);
//car.drive();
//car.honk();

// es6

})();