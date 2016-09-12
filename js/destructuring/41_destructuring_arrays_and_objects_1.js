(function(){

const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'},
];

//let [location] = companies; // destructure array, returns first object
//console.log(location); // Object {name: "Google", location: "Mountain View"}
//[{location}] = companies; // destructure array, returns first object, destructure that again, get location property
//console.log(location); // Mountain View

//------------------------------------------------------

const Google = {
  locations: ['Mountain View', 'New York', 'London']
}

const { locations: [location] } = Google
//console.log(location); // location
})();