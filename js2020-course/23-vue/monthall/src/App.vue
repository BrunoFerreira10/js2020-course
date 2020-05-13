<template>
  <div id="app">
    <h1>Monty Hall Problem</h1>
    <Door number="1" :hasGift="true"></Door>
  </div>
</template>

<script>
import Door from './components/Door'
export default {
  name: 'App',
  components: { Door  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body{
  color:#FFF;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));  
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: solid 1px #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}
</style>