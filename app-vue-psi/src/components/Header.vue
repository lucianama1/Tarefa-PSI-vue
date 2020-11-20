<template>
    <div class= "header">
      <h2>Breaking Bad</h2>
      <p>Informações sobre uma das séries mais premiadas do mundo</p>
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
    height:10em;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.1)),url(../assets/breakingbad.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding:1em;
  }
</style>
