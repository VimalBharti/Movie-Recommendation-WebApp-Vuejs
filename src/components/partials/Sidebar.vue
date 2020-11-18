<template>
    <v-card class="sidebar" tile>
      <div class="logo text-center">
        <router-link to="/">
          <v-avatar size="60"><v-img src="@/assets/logo.png"></v-img></v-avatar>
        </router-link>
      </div>
      <v-list-item two-line v-for="item in items" :key="item.id" class="pa-0 sidebar-links">
        <router-link :to="item.link">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Movies", icon: "mdi-television-classic", link: "movies" },
        { title: "Web Series", icon: "mdi-movie-roll", link: "web-series" },
        { title: "Playlist", icon: "mdi-animation-play", link: "playlist" },
        { title: "New Arrivals", icon: "mdi-ticket", link: "new" },
        { title: "Coming Soon", icon: "mdi-alarm", link: "upcomming" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  // max-height: 100vh;
  // min-height: 100%;
  height: 100vh;
  overflow: scroll;
  text-align: center;


  .sidebar-links{
    border-top: 1px solid #efefef;
    a {
      text-align: center;
      text-decoration: none;
      width: 100%;
      padding: 0.8rem 0;
      &:hover{
        background: #efefef;
      }
    }
  }
}
.logo{
  padding-bottom: 0.5em;
  padding-top: 0.6em;
}
</style>
