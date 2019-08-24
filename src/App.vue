<template>
  <v-app>
    <v-app-bar app>
      <v-img src="../src/assets/Me.jpg" class="rounded" max-width="50" max-height="50"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Claudio de Oliveira Almeida Junior</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a class="font" href="https://github.com/Kirizuro" target="_blanked">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </a>
      <a
        class="font"
        href="https://www.linkedin.com/in/claudio-de-oliveira-almeida-junior-3a6a75136/"
        target="_blanked"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
      </a>
    </v-app-bar>
    <Action />
    <router-view />
  </v-app>
</template>

<script>
import Action from "./actions/Actions";

export default {
  name: "App",
  components: {
    Action
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.font {
  margin: 3px;
  text-decoration: none;
  color: #000;
}
.rounded {
  border-radius: 50%;
}
</style>

