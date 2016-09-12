(function(){

// es5 
function makeAjaxRequest(url, method){
  if(!method)
    method = 'GET';
  // logic to make request
}

// es6

function makeAjaxRequest_es6(url, method = 'GET'){
  console.log(method);
  // logic to make request
}

//makeAjaxRequest_es6('http://google.com', 'POST'); // POST
//makeAjaxRequest_es6('http://google.com');         // GET

})();