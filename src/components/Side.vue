<template>
  <v-container>
    <v-flex xs12 text-center>
      <v-btn color="primary" x-large max-width12>
        <font-awesome-icon icon="user" class="icon" />Pessoal
      </v-btn>
      <v-btn color="secondary" x-large>
        <font-awesome-icon icon="briefcase" class="icon" />Projeto
      </v-btn>
      <v-tabs>
        <v-tab>
          <font-awesome-icon icon="user" class="icon" size="3x" />Pessoal
        </v-tab>
      </v-tabs>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Side",
  data: () => ({
    icons: [
      {
        icon: "user"
      },
      {
        icon: "briefcase"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.side-btn {
  float: right;
  z-index: 99;
  width: 100px;
  position: relative;
  margin-bottom: 10px;
  font-size: 30px;
  text-decoration: none;
  color: #fff;
}
#mySidenav a {
  position: absolute;
  //  left: 50vw;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}

.icon {
  color: #000;
}

#mySidenav a:hover {
  left: 0;
}
</style>
