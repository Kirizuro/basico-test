<template>
  <v-container>
    <v-content>
      <v-flex text-center>
        <router-link to="/">
          <v-btn class="btn" color="primary" dark>Pessoal</v-btn>
        </router-link>
        <router-link to="/project">
          <v-btn class="btn" color="secondary" dark>Projeto</v-btn>
        </router-link>
      </v-flex>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Actions"
};
</script>

<style scoped>
.btn{
    margin: 5px;
}
</style>
