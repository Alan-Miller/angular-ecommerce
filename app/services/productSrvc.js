angular.module("ecommerce").service('productSrvc', function(){
  // Function to get products.
  this.getProducts = function(){
    return products;
  }
  let products = [{name:'Shoes',
  imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
  description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
  price:25
  },{name:'Socks',
  imageUrl:'https://www.divvyupsocks.com/wp-content/uploads/blue800.png',
  description:'Super awesome socks with puppies on them.',
  price:100
  },{name:'Shirt',
  imageUrl:'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Zine-2nd-Inning-Heather-Grey-%26-Marled-Red-Baseball-Shirt-_225749-front.jpg',
  description:'It is a shirt.',
  price:15
  },{name:'Space Fruit',
  imageUrl:'https://ctl.s6img.com/society6/img/TtK7KWlA4hPvW98_g3IMjwK5vXc/h_550,w_550/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF/s6-0025/a/11385279_14899658/~~/lunar-fruit-tshirts.jpg',
  description:'It is fruit in space.',
  price:30
  },{name:'Polo',
  imageUrl:'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages/_2654000/ff_2654848a_full.jpg&w=340',
  description:'This shirt was just a joke. I didn\'t think they would really make it.',
  price:16
  }]
})
