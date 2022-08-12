export function ClassHierarchy() {
  
  class Character {
   constructor(name, type, health = 10, level = 1, attack, defense) {
    this.name = name
    this.type = type
    this.health = health
    this.level = level
    this.attack = attack
    this.defense = defense
  
  
    if (this.name.length>10 || this.name.length<2 || this.name !== String(name) ) {
      throw new Error('Error')
    }
   }
   

   levelUp() {
     if (this.health === 0) {
       throw new Error ('you cannot increase the level of the deceased.')   
     }
     this.level+=1
     this.attack += this.attack * 0.2
     this.health=100
}
   
   
   damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 -  this.defense / 100) 
    }
     
}
   
   
}

class Bowerman extends Character {
  constructor(name, type, health, level, attack=25, defense=25) {
    super(name, type, health, level, attack, defense)
  }
 
}
  
class Swordsman extends Character {
  constructor(name, type, health, level, attack=40, defense=10) {
   super(name, type, health, level, attack, defense)
  }
 

}

class Magician extends Character {
  constructor(name, type, health, level, attack=10, defense=40) {
   super(name, type, health, level, attack, defense)
  }
 

}

class Daemon extends Character {
  constructor(name, type, health, level, attack=25, defense=25) {
   super(name, type, health, level, attack, defense)
  }
 

}

class Undead extends Character {
  constructor(name, type, health, level, attack=40, defense=10) {
    super(name, type, health, level, attack, defense)
   }

} 
  
  
class Zombie extends Character {
  constructor(name, type, health, level, attack=10, defense=40) {
    super(name, type, health, level, attack, defense)
   }

  }  
  

  
  
  

  
  


  







  

  
  
  

  
  
  
  
  
  
  
  
  
  
}




