(function(){

// es5
const team = {
  members: ['radu', 'vasi'],
  teamName: 'Aeche',
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`; // 'this' is undefined
    }/*.bind(this)*/); // uncomment bind to make it work
  }
};

//console.log(team.teamSummary()); 
// Uncaught TypeError: Cannot read property 'teamName' of undefined
// we can use arrow functions to solve this

// es6
const team2 = {
  members: ['radu', 'vasi'],
  teamName: 'Aeche',
  teamSummary: function(){
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

//console.log(team2.teamSummary()); // ["radu is on team Aeche", "vasi is on team Aeche"]


})();