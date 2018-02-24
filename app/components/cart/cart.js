angular.module('ecommerce').component('cart', {
  templateUrl:'app/components/cart/cart.html',
  controllerAs:'ct',
  bindings:{},
  controller:function(cartSrvc){
    this.cart = cartSrvc.getCart();
    this.refreshCart = function(){
      this.cart = cartSrvc.getCart();
    }
    this.getTotal = function(){
      return cartSrvc.total();
    }
  }
})
