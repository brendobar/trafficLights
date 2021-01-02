import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"

Vue.use(VueRouter)

Vue.config.productionTip = false


class Color {
  constructor(color, time, next){
    this.color = color;
    this.time = time;
    this.next = next;
  }
}

var red = new Color('red', 10);
var yellowR = new Color('yellow', 3);
var yellowG = new Color('yellow', 3);
var green = new Color('green', 15);

red.next = yellowR;
yellowR.next = green;
green.next = yellowG;
yellowG.next = red;


let colorMap = new Map()
colorMap.set('red', red)
colorMap.set('yellow', yellowR)
colorMap.set('green', green)





new Vue({
  render: h => h(App),
  el: '#app',
  router,
  mounted: 
    function(){
      var color_url = window.location.hash.split('/')[1];
      
      if (color_url == ""){
        changeColor(red)
      }else{
        changeColor(colorMap.get(color_url))
      }
    },
  watch: {
    $route() {
      var killId = setTimeout(function() {
        for (var i = killId; i > 0; i--) clearInterval(i)
      }, 100)
      

      var color_url = window.location.hash.split('/')[1]
      if(color_url == "red"){
        colorMap.set('yellow', yellowR)
      }else if(color_url == "green"){
        colorMap.set('yellow', yellowG)
      }
      changeColor(colorMap.get(color_url))
    }
}
})






function flashing(){

  var time = 0
  var active = document.getElementById(window.location.hash.split('/')[1])

  for(time; time<2500; time=time+500){
    setTimeout(() => active.style.opacity = '1', time)
    time=time+500
    setTimeout(() => active.style.opacity = '0.25', time)
  }

  
}


function changeColor(color_obj){


    var lights = document.querySelectorAll('.lights')
    for(var i=0; i<lights.length;i++){
      lights[i].style.opacity = '0.25'
    }
    
    document.getElementById(window.location.hash.split('/')[1]).style.opacity = '1'
    var time = color_obj.time
    var color = color_obj.color
    var next = color_obj.next

    router.push(color)

    var timer = document.getElementById("sec").textContent = time
    var pause = 0
    for(var t = timer; t>0;t--){
      setTimeout(() => document.getElementById("sec").textContent = timer--, pause);
      pause+=1000
    }


    setTimeout(flashing, (time-3)*1000)
    setTimeout(function() {
      router.push(next.color)
    },time*1000)
    



}

