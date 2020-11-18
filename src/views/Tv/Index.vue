<template>
  <div class="index-page">
    <v-container fluid>
      <div class="filter-movie">
        <v-row class="filter-toolbar px-3 mb-6">
          
          <div class="search-movies">
            <input type="text" placeholder="Enter Web Series Name..." class="filter-movie-input" v-model="query">
            <v-btn large dark depressed @click="searchTvs">Filter</v-btn>
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
          <Card v-for="tv in tvs" :key="tv.slug" :tv="tv" />
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
                <List v-for="tv in tvs" :key="tv.id" :tv="tv" />
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>

        <div class="text-center mt-2 mb-2" v-if="tvs.length">
          <v-btn class="text-capitalize" text outlined @click="infiniteScroll">Load more</v-btn>
        </div>

      </div>
    </v-container>
  </div>
</template>

<script>
import Sort from "@/components/Tv/TvSort";
import Card from "@/components/Tv/TvCard";
import List from "@/components/Tv/TvList";
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
      tvs: []
    };
  },
  computed: {
    url() {
      return "http://www.pofkorn.work/api/tvs?page=" + this.page;
    },
    filterMovies: function(){
      var inputText = this.search;
      return this.tvs.filter((tv) => {
        return tv.title.match(new RegExp(inputText, 'i'));
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
              response.data.data.forEach(item => this.tvs.push(item));
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
    loadTv: async function (){
      axios
        .get("tvs")
        .then((res) => {
          if (res.status == 200) {
            this.tvs = res.data.data;
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
    searchTvs(){
      axios
        .post("/search", {
          query: this.query
        })
        .then(response => {
          this.tvs = response.data;
        });
    }
  },
  mounted(){
    this.loadTv()
  },
  head: {
    title: "All Web Series",
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