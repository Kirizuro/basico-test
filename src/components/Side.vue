<template>
  <v-container class="side-btn">
    <v-item-group mandatory>
      <v-item v-slot:default="{active, toggle}">
        <v-card :color="active? 'primary' : ''" @click="toggle">
          <v-scroll-y-transition>
            <div v-if="active"></div>
            <v-flex xs2 md2>
              <v-btn color="primary">
                <font-awesome-icon icon="user" class="icon" />
              </v-btn>
              <v-btn color="secondary">
                <font-awesome-icon icon="briefcase" class="icon" />
              </v-btn>
            </v-flex>
          </v-scroll-y-transition>
        </v-card>
      </v-item>
    </v-item-group>
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
  color: #fff;
}

#mySidenav a:hover {
  left: 0;
}
</style>
