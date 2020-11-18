<template>
    <div class="index-page">
      <v-container fluid class="px-6">

          <!-- Movie Recommed List -->
          <div class="recommend-movie-tv-list">
            <v-row class="single-list" v-if="playlist">
              <v-col md="3" v-for="(list, index) in playlist" :key="index">
                <router-link
                  :to="{ name: 'list-slug', params: { slug: list.slug } }"
                  target="_blank" class="list-image-link"
                >
                  <v-img :src="`http://d3khwxx4aph9v3.cloudfront.net/lists/${list.image}`"
                    gradient="to right , rgba(0,0,0,.3), rgba(0,0,0,0.4)"
                    height="200px"
                    position="left"
                    class="blog-image white--text align-center text-center"
                  >
                    <template v-slot:placeholder>
                      <v-sheet><v-skeleton-loader></v-skeleton-loader></v-sheet>
                    </template>
                    <h3 class="blog-title">{{ list.title }}</h3>
                  </v-img>
                </router-link>
              </v-col>
            </v-row>
          </div>

          <!-- Latest Movie -->
          <div class="latest-movies mt-6">
            <div class="block-title">
              <span class="heading-text">Latest Movie</span>
            </div>
            <v-row>
              <Card
                v-for="(movie, index) in movies"
                :key="index"
                :movie="movie"
              />
            </v-row>
          </div>

      </v-container>
      
    </div>
</template>

<script>
import axios from "@/axios";
import Card from "@/components/Movie/Card";

export default {
  name: "Home",
  components: {
    Card
  },
  data(){
    return{
      playlist: [],
      movies: []
    }
  },

  methods:{
    async loadPlaylist(){
      let response = await axios.get('lists')
      this.playlist = response.data.data
    },
    async trendingMovie(){
      let response = await axios.get('trending-movies')
      this.movies = response.data.data
    }
  },
  mounted(){
    this.loadPlaylist(),
    this.trendingMovie()
  }
};
</script>


<style lang="scss" scoped>
a{text-decoration: none;} 
.list-image-link {
  .blog-image {
    border-radius: 8px;
  }
  .blog-title {
    font-weight: bold;
    font-size: 1rem;
    background: rgba($color: #000000, $alpha: 0.5);
    padding: 1em;
  }
}
.block-title {
  border-left: 8px solid teal;
  margin-bottom: 1.4em;
  display: flex;
  .heading-text {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.2em;
    padding-left: 1em;
  }
  a {
    color: grey;
  }
}
</style>