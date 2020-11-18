<template>
  <div class="index-page">
    <v-container fluid>
      <div class="filter-movie">
        <v-row class="filter-toolbar px-3 mb-6">
          
          <div class="search-movies">
            <input type="text" placeholder="Enter Movie Name..." class="filter-movie-input" v-model="query">
            <v-btn large dark depressed @click="searchMovies">Filter</v-btn>
          </div>

          <v-spacer></v-spacer>

          <Sort />
          
          <v-btn-toggle v-model="toggle_exclusive" class="ml-4"  dense>
            <v-btn outlined color="grey" @click="gridView()" large>
              <v-icon size="16">mdi-view-grid</v-icon>
            </v-btn>
            <v-btn outlined color="grey" @click="listView()" large>
              <v-icon size="16">mdi-view-headline</v-icon>
            </v-btn>
          </v-btn-toggle>

        </v-row>

        <v-row v-show="grid">
          <Card v-for="movie in movies" :key="movie.slug" :movie="movie" />
        </v-row>

        <v-row v-show="list">
          <v-col>
            <v-simple-table class="table-movie">
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Year</th>
                  <th class="text-left">Genre</th>
                  <th class="text-center">
                    <v-btn small color="#E1B52D" light>IMDB</v-btn>
                  </th>
                  <th class="text-center">Available On</th>
                </tr>
              </thead>
              <tbody>
                <List v-for="movie in movies" :key="movie.id" :movie="movie" />
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>

        <div class="text-center mt-2 mb-2" v-if="movies.length">
          <v-btn class="text-capitalize" text outlined @click="infiniteScroll">Load more</v-btn>
        </div>

      </div>
    </v-container>
  </div>
</template>

<script>
import Sort from "@/components/Movie/Sort";
import Card from "@/components/Movie/Card";
import List from "@/components/Movie/List";
import InfiniteLoading from 'vue-infinite-loading';
import axios from "@/axios";

export default {
  components: {
    Sort,
    Card,
    List,
    InfiniteLoading
  },
  data() {
    return {
      toggle_exclusive: 2,
      grid: true,
      list: false,
      links: [],
      page: 1,
      query: '',
      movies: []
    };
  },
  computed: {
    url() {
      return "http://www.pofkorn.work/api/movies?page=" + this.page;
    },
    filterMovies: function(){
      var inputText = this.search;
      return this.movies.filter((movie) => {
        return movie.title.match(new RegExp(inputText, 'i'));
      }); 
    }
  },
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++;
        axios
          .get(this.url)
          .then(response => {
            if (response.data.data.length > 1) {
              response.data.data.forEach(item => this.movies.push(item));
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, 500);
    },
    loadMovie: async function (){
      axios
        .get("movies")
        .then((res) => {
          if (res.status == 200) {
            this.movies = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    listView() {
      this.grid = false;
      this.list = true;
    },
    gridView() {
      this.grid = true;
      this.list = false;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    searchMovies(){
      axios
        .post("/search", {
          query: this.query
        })
        .then(response => {
          this.movies = response.data;
        });
    }
  },
  mounted(){
    this.loadMovie()
  },
  head: {
    title: "All Movies",
  },
};
</script>


<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba($color: #000000, $alpha: 0.6);
}
.movie-name {
  margin-top: 8px;
  a {
    color: #666;
    text-decoration: none;
    font-size: 15px;
  }
}
.search-movies{
  .filter-movie-input{
    border: 1px solid #444;
    width:40vw;
    margin-right: 12px;
    border-radius: 5px;
    padding: 9px 12px;
    color: #dcdcdc;
    outline: none;
  }
}

.watchlist-actions {
  width: 33px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #444;
  padding: 0 5px;
  overflow: hidden;
  transition: height 0.3s;
  -webkit-transition: width 0.3s;
  background: rgba($color: #000000, $alpha: 0.4);

  &:hover {
    width: 140px;
  }
  a {
    color: #fff;
    font-size: 13px;
  }
}
</style>