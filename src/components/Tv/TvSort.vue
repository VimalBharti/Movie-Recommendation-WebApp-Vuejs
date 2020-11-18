<template>
  <div class="left-menus">
    <v-btn large href="/tvs" dark depressed>All</v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="ml-3 text-capitalize" large  depressed outlined>
          <span class="mr-2" v-text="slug ? slug : 'Select Genre'"></span>
          <v-icon size="12">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card-text>
          <div class="all-genres">
            <span
              class="genre-link"
              v-for="genre in genres"
              :key="genre.id"
            >
              <v-icon size="16" color="grey">mdi-menu-right</v-icon>
              <nuxt-link :to="`/tvs/genre/${genre.slug}`">
                {{genre.title}}
              </nuxt-link>
            </span>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import axios from '@/axios'
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      toggle_exclusive: 2,
      grid: true,
      list: false,
      genres: [],
      platforms: [
        { name: "Netflix" },
        { name: "Prime Video" },
        { name: "Hotstar" },
        { name: "Sony LIV" },
        { name: "Zee5" },
        { name: "erosNow" },
        { name: "TVF" }
      ]
    };
  },
  mounted() {
    this.loadGenre();
  },
  methods:{
    async loadGenre(){
      let response = await axios.get('all-genre')
      this.genres = response.data
    }
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.all-genres {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 300px;
  width: 800px;
  overflow-x: scroll;
  .genre-link {
    margin: 12px 15px;
    a{
      color: #999;
      text-transform: capitalize;
      text-decoration: none;
      &:hover{
        color: #cdcdcd;
      }
    }
  }
}
.all-platform {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  max-height: 150px;
  .genre-link {
    margin: 12px 6px;
    a{
      color: #999;
      text-transform: capitalize;
      text-decoration: none;
      &:hover{
        color: #cdcdcd;
      }
    }
  }

}
a {
  color: #999;
  text-transform: capitalize;
  text-decoration: none;
}
</style>
