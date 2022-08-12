export function AbstractClass() {
  
  class User {
    constructor(name,age) {
      if (this.constructor ===User) {    
        throw new Error ('error')  
      }
         this.age = age
         this.name=name 
    }
 
    someMethod() {
      throw new Error('Method ')
    }
  }



  class Students extends User {
    constructor(name,age,address) {
     super(name,age)
      this.address = address
    }
    someMethod() {
      console.log(this.name)
    }
  }
  

  //const user= new User()
 
  const student = new Students('John', 33, 'Abovyan 5/22')
 // student.someMethod()




}