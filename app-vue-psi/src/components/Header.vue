<template>
    <div class= "header">
      <h2>Breaking Bad</h2>
      <p>Clique no botão para ver um personagem aleatório</p>
    </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
  .header{
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    color: white;
    height:7em;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url(../assets/breakingbad.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding:1em;
  }
</style>
