<template>
  <div id="app">
    <Header/>
    <ul id="tabs">
      <li><a id="charTab" v-on:click="goToChar">Personagens</a></li>
      <li><a id="epTab" v-on:click="goToEp">Episódios</a></li>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); /*fonte*/
  #tabs{
    margin: 0;
    padding: 0px 0px 25px;
    background-color: #292929;
    height:1vh;
  }
  li{
    font-weight: bold;
    font-size: medium;
    color: #fff;
    float:left;
    display: block;
    text-emphasis: none;
  }
  li a{
    cursor:pointer;
    padding:12px 20px;
    border-radius: 15px 15px 0px 0px;
  }
  #charTab{
    background-color:rgb(24, 69, 99);
  }
  #epTab{
    background-color:rgb(24, 97, 75);
  }
  .content{
    background-color: #3b3b3b;
    bottom:0;
    color:black;
    margin:0;
    height: 79vh;
    padding:2em;
  }
  .get-button{
    cursor:pointer;
    font-weight: bold;
    font-size: medium;
    border-radius: 7px;
    height:3em;
    width: 100%;
    color:#ffffff;
    border:none;
  }
  #app {
    height:100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body {
    cursor:default;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #3b3b3b;
  }
</style>
