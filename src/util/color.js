export default class Color {


    constructor(color, time, next){
      this.color = color;
      this.time = time;
      this.next = next;
    }  
    
    
    
    flashing(){
  
      var time = 0
      var active = document.getElementById(window.location.hash.split('/')[1])
    
      for(time; time<2500; time=time+500){
        setTimeout(() => active.style.opacity = '1', time)
        time=time+500
        setTimeout(() => active.style.opacity = '0.25', time)
      }
    
      
    }
  }
