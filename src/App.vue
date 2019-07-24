<template>
  <div id="app">
    <nav class="nav fixed">
      <h2>{{name="Claudio de Oliveira Almeida Junior"}}</h2>
    </nav>
    <Personal name="Claudio de Oliveira Almeida Junior" />
  </div>
</template>

<script>
import Personal from "./components/Personal.vue";
import Project from "./components/Project.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    Personal,
    Project
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fixed {
  display: fixed;
  margin: 10px;
  box-shadow: 5px 5px 20px rgb(39, 38, 38);
}
</style>
