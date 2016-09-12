(function(){

function modifyElement(url, data){
  // this wont actually work 
  $.ajax({ url, data, method: 'GET' });
}

//modifyElement('http://example.com', { color: 'red' });

})();