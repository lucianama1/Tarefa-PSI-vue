<template>
  <div class="card">

    <button v-on:click="randomChar">Personagem</button>
    <div class="panel" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
      <p v-on:click="toggleIsHidden">{{info.name}}</p>
      <p v-show="isHidden">{{info.status}}</p>
      <img :src="info.img">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  props: {
    msg: String
  },
  data() {
    return {
      infos: [],
      isHidden: false
    }
  },

  methods:{
    randomChar(){          //carrega assim que o app for aberto
        axios.get('https://www.breakingbadapi.com/api/character/random')
        .then(response => {
          this.infos = (response.data)      
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    toggleIsHidden(){
      if(this.isHidden == true){
        this.isHidden = false;
      }
      else{
        this.isHidden = true;
      }
    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel{
    height:15em;
    width:100%;
    background-color: #ffffff;
    border-radius: 15px;
  }
  img{
    height:50%;
    width:auto;
  }
  button{
    border-radius: 7px;
    height:3em;
    width: 100%;
    background-color:rgb(167, 170, 0);
    color:#ffffff;
    border:none;
  }


</style>
