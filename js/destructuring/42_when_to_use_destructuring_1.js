(function(){

//in the case of a function with many props in param object
function signup({username, password, email, dateOfBirth, city}){
  console.log(username); // radu
}

const user = {
  username: 'radu', 
  password: '1234',
  email: 'radu@email.com', 
  dateOfBirth: '29/05/1989',
  city: 'Timisoara' 
};

//signup(user);

//--------------------------------------------------------
const points = [ [4, 5], [10, 1], [0, 40] ];
// destructure array where x = arr[0] and y = arr[1]
const pointsObj = points.map( ([x, y]) => {
  return {x, y};
}); 

//console.log(pointsObj);
})();