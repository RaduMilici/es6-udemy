(function(){

class Car{
  constructor({ title }){
    this.title = title;
  }

  drive(){
    console.log(`${ this.title } is driving.`);
  }
}

class Citroen extends Car{
  constructor({ title, color }){
    super({ title });
    this.color = color;
  }

  honk(){
    console.log(`A ${ this.color } ${ this.title } is honking.`)
  }
}

const car = new Citroen({ title: 'C3', color: 'silver' });
car.drive(); // C3 is driving.
car.honk();  // A silver C3 is honking.

})();