<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Keycloak/>
</template>

<script>
import Keycloak from './components/Keycloak.vue'

export default {
  name: 'App',
  components: {
    Keycloak
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
