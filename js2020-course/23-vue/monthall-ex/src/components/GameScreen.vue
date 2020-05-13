<template>
  <div id="game-screen">
      <button>Restart</button>
      <div id="door-group" ref="dg">        
        <Door v-for="n in 5" :key="n" :doorNumber="n" 
            closed @onDoorSelect="clearSelections" :prized="n == 3">             
        </Door>   
        
      </div>
  </div>
</template>

<script>
import Door from './Door'

export default {
    components: { Door },
    data: function() {
        return{
            dg: {}
        }
    },
    methods: {        
        clearSelections(evt) {                       
            Array.from(this.dg.children).forEach((e) => {        
                console.log(e.getAttribute("dataDoorNumber"), evt.dataDoorNumber)                           
                if  (e.getAttribute("dataDoorNumber") !== evt.dataDoorNumber){                    
                    e.classList.remove("dataSelected")
                } else {
                    if(evt.dataClosed)
                        e.classList.add("dataSelected")
                }                    
            })            
        }
    }  
}

</script>

<style>
#game-screen {
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: space-between;
}

#door-group{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90vw;
    margin-top: 20px;
}
</style>