(function(){

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator; //iterates over other generator
}

function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester; 
}
 
const names = [];

for(let name of TeamIterator(engineeringTeam)){
  names.push(name);
}

//console.log(names); // ["Jill", "Alex", "Dave", "Amanda", "Bill"]

})();