<template>
  <div id="app">
    <Vis msg="Welcome to Your Vue.js App2" />
  </div>
</template>

<script>
import Vis from "./components/VisGraphic.vue";

export default {
  name: "app",
  components: {
    Vis
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  overflow: hidden;
}
</style>
