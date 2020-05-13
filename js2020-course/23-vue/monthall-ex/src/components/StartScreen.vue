<template>
  <div id="start-screen">
    
    <div class="input-group">
      <p>How many doors in the game?</p>
      <input type="text" name="input-doors" value="3"/>
    </div>

    <div class="input-group">
      <p>Which door is the prize?</p>
      <input type="text" name="input-prize-door" value="1"/>
    </div>

    <button>Start</button>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>

#start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
    display:flex;
    align-items: center;
}

p {
    color: #fff;
}

input {
  width: 50px;
  margin-left: 10px;
  
}

button {
    margin-top: 20px;
    font-size: 1.2em;
}
</style>