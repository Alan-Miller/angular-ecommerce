angular.module('ecommerce').service('cartSrvc', function(){
  // Creating a cart.  In a real app we would store this either
  // in the app storage, or send it to the backend and save it
  // on our server.
  let cart = [];

  // Basic add a new line item when we add an item, with amt 1.
  this.addItem = function(newItem){
    cart.push(Object.assign({}, {amt:1,product:newItem}));
  }

  // return the card object
  this.getCart = function(){
    return cart;
  }

  // return the total value of the cart.  This way we can write it once
  // and use it anywhere we need to. 
  this.total = function(){
    return cart.reduce((total, item)=>{
      return total+item.product.price*item.amt
    },0);
  }

})
