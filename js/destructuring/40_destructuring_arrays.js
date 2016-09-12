(function(){

const companies = [ 'Google', 'Facebook', 'Uber' ];
//order of declaration is identical to index
const [ googleName, facebookName ] = companies;
//console.log(googleName);
//console.log(facebookName);

const [googleNameAgain, ...rest] = companies;
//console.log(rest); // ["Facebook", "Uber"]


})();