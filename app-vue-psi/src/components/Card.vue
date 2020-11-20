<template>
  <div class="card">

    <button class="get-button" v-on:click="randomChar">Novo personagem</button>

    <div class="panel">
      <div class="panel-left" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
        <img :src="info.img">
      </div>
      <div class="panel-right" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
        <h3>{{info.name}}</h3>
        <p>({{info.nickname}})</p>
        <p>Profissão: {{info.occupation[0]}}</p>
        <p v-show="isHidden">Status : {{info.status}}</p>
      </div>   
    </div>
      <button class="get-button" v-on:click="toggleIsHidden" >SPOILER: Vivo ou morto?</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',

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
    toggleIsHidden(){ //para o spoiler
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
    border-radius: 5px;
    display:flex;
    flex-direction: row;
    margin-top: 1em;
    margin-bottom: 1em;
    height:20em;
    width:100%;
    background-color: #ffffff;
  }
  .panel-left{
    width:50%;
  }
  .panel-right{
    width:50%;
    text-align: center;
    padding: 5%;
  }
  img{
    border-radius: 4px 0px 0px 4px;
    overflow: hidden;
    height:100%;
    width:100%;
    object-fit: cover;
  }
  .get-button{
    font-weight: bold;
    font-size: medium;
    border-radius: 7px;
    height:3em;
    width: 100%;
    background-color:rgb(24, 69, 99);
    color:#ffffff;
    border:none;
  }

</style>
