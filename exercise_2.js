export function CoffeeShop() {
 
function CoffeeShop(name,menu,orders) {
  this.name = name
  this.menu = menu
  this.orders = orders
  
  this.addOrder = function (order) {
    let masages='This item is currently unavailable!'
    
   arrMenu.forEach(element =>
    {
      if (element.name.indexOf(order)!==-1) {
        this.orders.push(element)
        masages = 'Order added!'
      }
    })
  return masages       
  }

  this.fulfillOrder = function () {
  
    if (this.orders === undefined || this.orders.length <1 ) {
      return 'All orders have been fulfilled!'    
    }
    else { 
      return orders
        .map(item => {
         item =`The ${item.name} is ready!\n`
         return item})
         .join(' ')
    };   
  }
   
  this.listOrders = function () {
  return orders.map(item => item.name)
  }


  this.dueAmount=function () {
   return orders.reduce((sum, current) => sum+current.price,0)
  }


  this.cheapestItem = function () {
  
   let obj=arrMenu.reduce((item, current) => {
   
      return (item.price < current.price) ? item : current
   })
    return obj.name
  }  
  
  this.drinksOnly = function () {
    return arrMenu
      .filter(item => {
      if (item.type === 'drink') {
        return item
      }   
      })
      .map(item => item.name)
   }

   this.drinksOnly = function () {
    return arrMenu
      .filter(item => {
      if (item.type === 'food') {
        return item
      }   
      })
      .map(item => item.name)
   }


}
  

  
  const arrMenu = [
    { name:'espresso',
      type: 'drink',
      price: 19.5
    },
    {
      name:'americano',
      type: 'drink',
      price: 22.5
    },
    {
      name:'croissant',
      type: 'food',
      price: 33.5
    },
    {
      name:'truffle',
      type: 'food',
      price: 35
    }

  ]

  const coffeeShop = new CoffeeShop('shop', arrMenu, [])

  // console.log(coffeeShop.addOrder('espresso'))
  // console.log(coffeeShop.addOrder('americano'))
  // console.log(coffeeShop.addOrder('cocoa'))
  // console.log(coffeeShop.fulfillOrder())
  // console.log(coffeeShop.listOrders())
  // console.log(coffeeShop.dueAmount()) 
  // console.log(coffeeShop.cheapestItem()) 
  // console.log(coffeeShop.drinksOnly())  



}

 
