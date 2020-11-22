<template>
  <div class="episodes">

    <button class="get-button" v-on:click="nextEp">Seguinte</button>

    <div class="panel" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
      <h4>{{info.title}}</h4><hr>
      <h5>Temporada: {{info.season}} - Episódio: {{info.episode}}</h5>
      <h5>Lançamento: {{info.air_date}}</h5>
    </div>

    <button class="get-button" v-on:click="lastEp">Anterior</button>

  </div>
</template>

<script>
import Api from '../services/Api'

export default {
  name: 'Episodes',

  data() {
    return {
      infos: [],
      episode: 1
    }
  },
  created(){         //carrega assim que o app for aberto
    Api.get('/episodes/1')
    .then(response => {
    this.infos = (response.data)      
    })
    .catch(e => {
    this.errors.push(e)
    })
  },
  methods:{ //para passar pelos episódios em ordem
    nextEp(){
      this.episode++
      Api.get('/episodes/'+ this.episode)
      .then(response => {
        this.infos = (response.data)      
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    lastEp(){
      if(this.episode != 1){  //impede que vá para antes do ep 1
        this.episode--        
        Api.get('/episodes/'+ this.episode)
        .then(response => {
          this.infos = (response.data)      
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel{
    height: 26vh;
    margin-top: 1em;
    margin-bottom: 1em;
    width:100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding-top: 5%;
  }
  .get-button{
    background-color:rgb(24, 97, 75);
  }

</style>
