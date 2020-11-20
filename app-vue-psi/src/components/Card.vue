<template>
  <div class="card">
    <div class="panel" v-for='info in infos' v-bind:key='info.id' v-bind:info="info">
      <p>{{info.name}}</p>
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
    }
  },
  created(){          //carrega assim que o app for aberto
      axios.get('https://www.breakingbadapi.com/api/characters')
      .then(response => {
        this.infos = (response.data)      
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
