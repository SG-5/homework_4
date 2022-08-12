export function OOP_Structure() {


  class City {
    
    get buildings() {
     return  this.building
    }
    
    set buildings(build) {
      this.building=build
    }
    
  }
  

  class Building extends City {
  
    get car() {
      return this.cars
     }
     
     set car(cars) {
       this.cars=cars
     }


  }
class Hospital extends Building {
  }
  
class PoliceDepartment extends Building {
 
} 

class Car extends Building{
  
} 
  
  
class PoliceCar extends Car {

}
class AmbulanceCar extends Car{

}


  const city = new City()
  
  const nairiHospital = new Hospital();
  const erebuniHospital = new Hospital();
  const centralPoliceDepartment = new PoliceDepartment()

  city.buildings=[nairiHospital,erebuniHospital,centralPoliceDepartment]


  const policeCar = new PoliceCar();
  const toyota= new PoliceCar()
  const ambulanceCar = new AmbulanceCar()

  
  nairiHospital.car=[ambulanceCar]

  








}





