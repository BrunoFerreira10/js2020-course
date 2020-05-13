<template>
  <div class="door" :dataDoorNumber="dataDoorNumber" :class="{dataClosed, dataSelected, dataPrized}" @click.self="doorClicked">
      <div class="door-body" @click.self="doorClicked">
          <p v-if="dataClosed || dataSelected" @click.self="doorClicked" >
              {{dataDoorNumber}}
          </p>
          <div v-if="dataClosed || dataSelected" class="handle" @click="handleClicked">
          </div>
          <img v-if="dataPrized && !dataClosed" src="../assets/images/gift.png" alt="Gift">
      </div>
      
      <div class="door-footer">
      </div>
  </div>
</template>

<script>
export default {
    
    props: {
        doorNumber : {},
        closed: {type: Boolean},
        selected: {type: Boolean},        
        prized: {type: Boolean}
    },   
    data: function() {
        return {
            dataDoorNumber: this.doorNumber,
            dataClosed: this.closed,
            dataSelected: this.selected,            
            dataPrized: this.prized
        }
    },
    methods: {
        doorClicked() {            
            if(this.dataClosed){
                this.dataSelected = !this.dataSelected;       
            }            
            this.$emit('onDoorSelect', this)
        },
        handleClicked(){            
            if(this.dataSelected && this.dataClosed) {                
                this.dataSelected = false;
                this.dataClosed = false;
            }
        }
    }
}
</script>

<style>    
    .door {
        display: flex;
        flex-direction: column;
        align-items: center;  
        margin: 10px;      
    }

    .door-body {
        display: grid;
        grid-template-rows: 33% 33% 33%;       
        height: 200px;
        width: 100px;
        background-color: #0003;          
        border-top: solid 4px brown;
        border-left: solid 4px brown;
        border-right: solid 4px brown;               
    }

    .door.dataClosed .door-body {        
        background-color: rgb(180, 121, 44);        
    }

    .door.dataSelected .door-body {        
        background-color: rgb(180, 121, 44);
        border-top: solid 4px yellow;
        border-left: solid 4px yellow;
        border-right: solid 4px yellow;
    }

    .door-body > p {
        justify-self: center;
        font-size: 2em;
        margin-top: 15px;
        margin-bottom: 0px;
    }

    .door.dataSelected p {
        color: yellow;
    }

    .handle {
        align-self: flex-start;        
        margin-left: 15px;
        margin-top: 20px;        
        width: 15px;
        height: 15px;
        border-radius: 15px;        
    }
    
    .door.dataClosed .handle {
        background-color:brown;         
    }

    .door.dataSelected .handle {
        background-color: yellow;
    }
    
    .door-footer {
        height: 5px;
        width: 110px;
        background-color: #aaa;
    }

    .door img{
        width: 50px;
        grid-row-start: 3;
        align-self: flex-end;
        justify-self: center;
    }
</style>