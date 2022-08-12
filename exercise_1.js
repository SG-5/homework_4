export function UnversityClass() {
  

  class University {
    constructor(members) {
      this.memberUniversity = members
  }
    addMember(member) {
      this.memberUniversity.push(member)
    }
  
    removeMember(member) {
      this.memberUniversity.forEach((element,index) => {
        
        if (element === member) {
          members.splice(index, 1)
      
        }
      }
        );
  
    }
  
  
    startLesson() {
      
      this.memberUniversity.forEach(element => {
        
        if (element instanceof Teacher) {
          element.energy-=5
        }
        element.energy-=2
      });
    
    }
  }
  
  
  class UniversityMember  {
    constructor(name, age, role, energy = 24) {
      this.name = name
      this.age = age
      this.role = role
      this.energy=energy
  }
    info() {
      return  `${this.name},${this.age},${this.role},${this.energy}`
     
    }
  }
  
  
  
  class Teacher extends UniversityMember{
    info() {
      super.info()
    }
  
  }
  const teacher = new Teacher('Anna', 28, 'teacher')
  
  const teacher1 = new Teacher('Emma', 33, 'teacher')
  
  class Student extends  UniversityMember{
    info() {
      super.info()
    }
  }
  
  
  const student = new Student('John', 32, 'student')
  const members = [teacher, student]
  
  
  
   const university = new University(members)
   university.addMember(teacher1)
   university.startLesson()
   university.removeMember(teacher1)
   //console.log(members)
  



}


