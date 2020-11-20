<template>
  <div class="card">

    <button class="get-button" v-on:click="randomChar">Personagem</button>

    <div class="panel" v-for='info in infos' v-bind:key='info.id' v-bind:info="info"><br>
      <h4 id="charName" v-on:click="toggleIsHidden">{{info.name}}</h4>
      <h5>({{info.nickname}})</h5>
      <p>Trabalho: {{info.occupation}}</p>   
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
  created(){         //carrega assim que o app for aberto
    axios.get('https://www.breakingbadapi.com/api/characters/1')
    .then(response => {
    this.infos = (response.data)      
    })
    .catch(e => {
    this.errors.push(e)
    })
  },
  methods:{
    randomChar(){
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
    margin-top: 1em;
    height:20rem;
    width:100%;
    background-color: #ffffff;
    border-radius: 15px;
  }
  img{
    border-radius: 0px 0px 15px 15px;
    height:100%;
    width: 100%;
    object-fit: cover;
  }
  .get-button{
    font-weight: bold;
    font-size: medium;
    border-radius: 7px;
    height:3em;
    width: 100%;
    background-color:rgb(167, 170, 0);
    color:#ffffff;
    border:none;
  }

</style>
