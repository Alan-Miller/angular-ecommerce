angular.module('ecommerce').component('cartChip', {
  template:'{{cp.getTotal()}}',
  controllerAs:'cp',
  controller:function(cartSrvc){
    this.getTotal = function(){
      return cartSrvc.getCart().length;
    }
  }
})
