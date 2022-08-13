export function TVClass() {


  class TV {
    constructor(brand) {
      this.brand = brand
      this.volume = 50;
      this.channel = 1;
      this.resetVolume = this.volume
      this.resetChannel = this.channel
    }


    increaseVolume() {
      return this.volume >= 100 ? 100 : this.volume += 10
    }

    decreaseVolume() {
      return this.volume <= 0 ? 0 : this.volume -= 10
    }
    

    setChannel(channelNumber) {
      return channelNumber > 50 || channelNumber < 1 ? this.channel : this.channel = channelNumber
     
    }

    reset() {
      this.volume = this.resetVolume 
      this.channel = this.resetChannel
    
    
    }
     
    status() {
      
      return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`
    }

  }
  

  const tv = new TV('Panasonic')
 
  tv.setChannel(5)
  tv.increaseVolume()
  tv.decreaseVolume()
  tv.reset()
  tv.status()


  
      
  
}