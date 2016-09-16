(function(){

new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve();
    //reject();
  }, 3000);
})

.then( () => {
  //console.log('promise has been resolved');   
})
.then( () => {
  //console.log('this was also resolved'); 
})
.catch( () => {
  //console.log('promise has been rejected'); 
});

})();