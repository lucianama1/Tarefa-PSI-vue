<template>
  <div id="app">
    <div class= "header">
      <h2>Breaking Bad</h2>
      <p>Clique no botão para ver um personagem aleatório</p>
    </div>
    <div class="content">
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
  .header{
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    color: white;
    height:7em;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url(assets/breakingbad.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding:1em;
  }
  .content{
    background-color: #f1f1f1;
    bottom:0;
    color:black;
    height:100%;
    margin:0;
    border-radius: 15px 15px 0px 0px;
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
