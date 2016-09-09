(function(){

// unlike filter, will loop until it finds the FIRST match, then break
var users = [
  { name: 'Radu' },
  { name: 'Vasi' },
  { name: 'Caius' },
];

var foundUser;

// es5
for (var i = 0; i < users.length; i++){
  if(users[i].name === 'Radu'){
    foundUser = users[i];
    break;
  }
}
//console.log(foundUser);

// es6
foundUser = users.find(function(user){
  return user.name === 'Radu';
});

//console.log(foundUser);

})();