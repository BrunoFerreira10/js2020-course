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
    <div class="doors" ref="doors" v-if="started">
        <Door  v-for="i in doorAmount" :key="i" :hasGift="i === selectedDoor" 
                :number="i" @onSelect="clearSelection"></Door>      
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
  }, methods: {
    clearSelection(evt) {         
      Array.from(this.$refs.doors.children).forEach(el => {
          if(el.__vue__ !== evt)
            el.__vue__.selected = false          
      })
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