<template>
  <div id="app">
    <h1>Monty Hall Problem</h1>
    <MontyHall />
  </div>
</template>

<script>
import MontyHall from './components/MontyHall'
export default {
  components: { MontyHall }
}
</script>

<style>
@font-face{
    font-family: "RobotoMono";
    src: url("./assets/fonts/RobotoMono-Thin.ttf");
}

* { 
    font-family: "RobotoMono", monospace;    
    font-weight: 900;    
    box-sizing: border-box;
}

body {
    margin: 0;
    background: linear-gradient(to right, rgb(140, 160, 172), rgb(77, 89, 156))  
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app > h1 {  
  color: #fff;
  border: solid 2px #0007;
  padding: 10px 25px;
  font-size: 1.5em;
  background-color: #3333;
}

</style>