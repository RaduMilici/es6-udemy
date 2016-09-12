(function(){

const MathLib = {
  calculateProduct(...rest){
    return this.multiply(...rest);
  },
  multiply(...rest){
    return rest.reduce((total, number) => total * number, 1);
  }
};

//console.log(MathLib.calculateProduct(5, 2, 3)); 

})();