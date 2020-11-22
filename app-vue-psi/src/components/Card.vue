<template>
  <div class="card">

    <button class="get-button" v-on:click="randomChar">Novo personagem</button>

    <div class="panel">
      <div class="panel-left" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
        <img :src="info.img">
      </div>
      <div class="panel-right" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
        <h3>{{info.name}}</h3>
        <hr>
        <p>({{info.nickname}})</p>
        <p>Profissão: {{info.occupation[0]}}</p>
        <p id="spoiler" v-on:click="toggleIsHidden" v-show="!isHidden">Status: SPOILER</p>
        <p id="spoiler" v-on:click="toggleIsHidden" v-show="isHidden"> {{info.status}}</p>
      </div>   
    </div>

  </div>
</template>

<script>
import Api from '../services/Api'

export default {
  name: 'Card',

  data() {
    return {
      infos: [],
      isHidden: false
    }
  },
  created(){         //carrega assim que o app for aberto
    Api.get('/characters/1')  //traz o personagem com id 1
    .then(response => {
    this.infos = (response.data)      
    })
    .catch(e => {
    this.errors.push(e)
    })
  },
  methods:{
    randomChar(){
      Api.get('/character/random')  //traz um personagem aleatório
      .then(response => {
        this.infos = (response.data)      
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    toggleIsHidden(){ //ativa e desativa o spoiler
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
    height:45vh;
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
    border-radius: 5px 0px 0px 5px;
    overflow: hidden;
    height:100%;
    width:100%;
    object-fit: cover;
  }
  .get-button{
    background-color:rgb(24, 69, 99);
  }
  #spoiler{
    cursor:pointer;
  }

</style>
