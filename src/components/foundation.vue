<template>
  <div class="tbody">
    <svg viewBox="0 0 168 460">
      <router-link to="/red">
        <path class="lights" id="red" d="M1287,394.75a61.49,61.49,0,1,1-18-43.49A61.49,61.49,0,0,1,1287,394.75Z" fill="#e84f32" transform="translate(-1141.5 -311.25)"/>
      </router-link>  

      <router-link to="/yellow">
        <path class="lights" id="yellow" d="M1287,540.5A61.49,61.49,0,1,1,1269,497,61.49,61.49,0,0,1,1287,540.5Z" fill="#f6b337" transform="translate(-1141.5 -312)"/>
      </router-link>

      <router-link to="/green">
        <path class="lights" id="green" d="M1287,686.25a61.49,61.49,0,1,1-18-43.49A61.49,61.49,0,0,1,1287,686.25Z" fill="#78c3a6" transform="translate(-1141.5 -310.5)"/>
      </router-link>
      
    </svg>
    
    <img id="foundation" class="traficLight" alt="Trafic Light" src="../assets/traficLight.svg">
    <div class="timer">
      <p id="sec"></p>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'App',
}
</script>



<style>
.tboby{
  position: relative;
  left: 20%;
}
.traficLight{
  width: 15%;
}
svg{
  z-index: 1;
  position: absolute;
  width: 15%;
}
a path {
    opacity: 0.25;
}

.timer{
    margin: 0;
    padding: 0;
    width: 20%;
    display: inline-block;
    position: absolute;
    top: 25%;
    left: 40%;
}
#sec{
  font-size: 5vw;
  font-family: fantasy;
}
</style>
