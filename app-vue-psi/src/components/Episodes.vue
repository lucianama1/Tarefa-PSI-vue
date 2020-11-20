<template>
  <div class="episodes">

    <button class="get-button" v-on:click="nextEp">Seguinte</button>

    <div class="panel" v-for='info in infos' v-bind:key='info.id' v-bind:info="info"><br>
      <h4>{{info.title}}</h4>
      <h5>Temporada: {{info.season}} - Episódio: {{info.episode}}</h5>
    </div>

    <button class="get-button" v-on:click="lastEp">Anterior</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Episodes',

  data() {
    return {
      infos: [],
      episode: 1
    }
  },
  created(){         //carrega assim que o app for aberto
    axios.get('https://www.breakingbadapi.com/api/episodes/1')
    .then(response => {
    this.infos = (response.data)      
    })
    .catch(e => {
    this.errors.push(e)
    })
  },
  methods:{
    nextEp(){
        this.episode++
        axios.get('https://www.breakingbadapi.com/api/episodes/'+ this.episode)
        .then(response => {
          this.infos = (response.data)      
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    lastEp(){
        if(this.episode != 1){
            this.episode--
        }        
        axios.get('https://www.breakingbadapi.com/api/episodes/'+ this.episode)
        .then(response => {
          this.infos = (response.data)      
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel{
    margin-top: 1em;
    margin-bottom: 1em;
    width:100%;
    background-color: #ffffff;
    border-radius: 15px;
  }
  .get-button{
    font-weight: bold;
    font-size: medium;
    border-radius: 7px;
    height:3em;
    width: 100%;
    background-color:rgb(24, 97, 75);
    color:#ffffff;
    border:none;
  }

</style>
