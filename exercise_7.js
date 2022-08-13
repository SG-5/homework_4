export function Shop(){

  class Product {
    constructor(name,type,price) {
      this.name = name
      this.type = type
      this.price= price

  }
}

  class  ShoppingCart {
    constructor() {
      this.products=[]
    }
    
    addProduct(product) {
        
     this.products.push(product)
  }
    removeProduct(product) {
    this.products.forEach((element,index) => {
      if (element === product) {
        this.products.splice(index,1)        
      }
    }
      );

  }
    
   totalPrice() {
     let result = 0
     let discount = 0
     
     result=this.products.reduce((sum, current) => sum += current.price, 0)
     
     if (this.products.length>=5) {
       result -= result * 0.1
     }

      this.products.reduce((count, item) => {
       count[item.name] = (count[item.name] || 0) + 1
       if(count[item.name]%4 === 0){
         discount += item.price
       }
       return count
      }, {})
     
        if (discount) {
          result-=discount
        }
        
    
     return result

    }
   
    replace(productName, replacementProduct) {
      if ( !this.products
        .map(item => item.name)
        .includes(productName) && productName === replacementProduct.name) {
      return  this.addProduct(replacementProduct)
      }
      
    }



}


  const product = new Product('pen','pencil',200)
  const product1 = new Product('note','notebook',600)
  const product2 = new Product('book', 'book', 1100)
  const product3 = new Product('dictionary_EN', 'book', 900)
  const product4 = new Product('dictionary_AM', 'book', 900)
  
  const shoppingCart = new ShoppingCart()
  shoppingCart.addProduct(product)
  shoppingCart.addProduct(product1)
  shoppingCart.addProduct(product)
  shoppingCart.addProduct(product)
  shoppingCart.addProduct(product)
  shoppingCart.addProduct(product1)
  shoppingCart.addProduct(product2)
  shoppingCart.removeProduct(product2)
  shoppingCart.replace('dictionary_EN',product3)
  shoppingCart.replace('dictionary_AM',product4)

  console.log(shoppingCart )
  
  

  


}