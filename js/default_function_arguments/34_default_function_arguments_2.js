(function(){

// es5
function User(id){
  this.id = id;
}

function generateID(){
  return Math.random() * 1000;
}

function createAdminUser(user){
  user.admin = true;
  return user;
}

// ugly nested function calls
let user = createAdminUser(new User(generateID()));
//console.log(user);

// es6
function User_es6(id){
  this.id = id;
}

function generateID_es6(){
  return Math.random() * 1000;
}

//default args can also be function calls
function createAdminUser_es6(user = new User_es6(generateID_es6())){
  user.admin = true;
  return user;
}

//cleaner single function call
let user_es6 = createAdminUser_es6();
//console.log(user_es6);

})();