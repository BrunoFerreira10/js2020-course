<template>
  <div id="app">
    <h1>Monty Hall Problem</h1>
    <div class="form">
      <div v-if="!started">
        <label for="doorAmount">How many doors?</label>
        <input type="text" id="doorAmount" size="3"
                v-model.number="doorAmount">                
      </div>
      <div v-if="!started">
        <label for="selectedDoor">What is the prize door?</label>
        <input type="text" id="selectedDoor" size="3"
                v-model.number="selectedDoor">                
      </div>
      <button v-if="!started" @click="started = true">Start</button>
      <button v-if="started" @click="started = false">Restart</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in doorAmount" :key="i">
        <Door :hasGift="i === selectedDoor" :number="i"></Door>
      </div>
    </div>
  </div>
</template>

<script>
import Door from './components/Door'
export default {
  name: 'App',
  components: { Door },
  data: function()  {
    return {
      started: false,
      doorAmount: 3,
      selectedDoor: null
    }
  }
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

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form, .form input, .form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
}
</style>