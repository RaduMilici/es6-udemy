(function(){

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  //this tells a 'for of' loop how to iterate over objects
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.tester; 
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){ 
    yield this.lead;
    yield this.manager;
    yield this.engineer; 
    yield* this.testingTeam; //iterates over other generator
  }
};
 
const names = [];

for(let name of engineeringTeam){
  names.push(name); 
}
 
//console.log(names); // ["Jill", "Alex", "Dave", "Amanda", "Bill"]

})();