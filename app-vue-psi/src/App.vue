<template>
  <div id="app">
    <Header/>
    <ul id="tabs">
      <li><a v-on:click="goToChar">Personagens</a></li>
      <li><a v-on:click="goToEp">Episódios</a></li>
    </ul>
    <div class="content">
      <Card v-if="isChar"/>
      <Episodes v-if="isEp"/>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Episodes from './components/Episodes.vue'

export default {
  name: 'App',
  components: {
    Card,
    Header,
    Episodes
  },
  data(){
    return{
      isChar: true,
      isEp: false
    }
  },
  methods:{
    goToChar(){
      if(this.isChar == false){
        this.isChar = true;
        this.isEp = false;
      }
    },
    goToEp(){
      if(this.isEp == false){
        this.isEp = true;
        this.isChar = false;
      }
    }
  }
}
</script>

<style>

  #tabs{
    border-radius: 15px 15px 0px 0px;
    margin: 0;
    padding: 0px 0px 25px;
    background-color: #f1f1f1;
  }
  li{
    font-size: medium;
    overflow: hidden;
    color: #000;
    float:left;
    display: block;
    text-emphasis: none;
    padding: 8px;
    background-color: #f1f1f1;
    border-radius: 15px 15px 0px 0px;
  }
  .content{
    background-color: #f1f1f1;
    bottom:0;
    color:black;
    height:100%;
    margin:0;
    padding:2em;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    background-color: rgb(163, 122, 34);
  }
</style>
