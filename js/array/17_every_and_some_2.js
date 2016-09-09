(function(){

function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
};

var username = new Field('radu');
var password = new Field('1234');

//console.log( username.validate(), password.validate() ); // true true

var fields = [username, password];

// es6
var allFieldsValid = fields.every(function(field){
  return field.validate();
});

//console.log( allFieldsValid ); // true

})(); 