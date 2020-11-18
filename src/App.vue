<template>
  <v-app>
      <v-row no-gutters class="main-container">
        <v-col md="1">
          <Sidebar />
        </v-col>
        <v-col md="11">
          <Navbar />
          <v-main>
            <router-view></router-view>
          </v-main>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar";
import Navbar from "@/components/partials/Navbar";

export default {
  name: "App",

  components: {
    Sidebar,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.main-container{
  ::-webkit-scrollbar {
    display: none;
  }
}
.index-page{
  max-height: 88vh;
  overflow-y: scroll;
}
</style>