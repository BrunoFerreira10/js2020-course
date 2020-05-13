<template>
  <div id="monty">
      <StartScreen />
      <GameScreen />
  </div>
</template>

<script>
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

export default {
    components: { StartScreen, GameScreen }
}
</script>

<style>

</style>