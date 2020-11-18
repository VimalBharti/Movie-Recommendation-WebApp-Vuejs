<template>
  <div class="search-box">
    <v-btn icon disabled>
      <v-icon size="28">mdi-text-search</v-icon>
    </v-btn>

    <div class="search-input">
      <input
        type="text"
        placeholder="Search movie by name..."
        v-model="query"
      />
    </div>

    <v-card
      tile
      class="pa-0 resultCard transparent"
      v-if="query.length"
      v-click-outside="onClickOutside"
      v-model="resultBox"
    >
      <v-list dense class="pa-0 transparent">
        <v-list-item
          v-for="result in results"
          :key="result.id"
          class="single-result px-2"
        >
          <v-img
            :src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${result.image}`"
            lazy-src="/images/lazy.png"
            max-height="80"
            max-width="60"
            width="100%"
            height="100%"
          ></v-img>

          <div v-if="result.type == 1">
            <router-link
              :to="{ name: 'movies-slug', params: { slug: result.slug } }"
              target="_blank"
            >
              <v-list-item-content class="result-brief">
                <h4 class="movie-title">
                  {{ result.title }}
                </h4>
                <ul>
                  <li>
                    <v-icon color="yellow" size="14">mdi-star</v-icon
                    ><span class="ml-1">{{ result.imdb }}</span>
                  </li>
                  <li>|</li>
                  <li>{{ result.year }}</li>
                </ul>
              </v-list-item-content>
            </router-link>
          </div>
          <div v-else>
            <nuxt-link
              :to="{ name: 'tv-slug', params: { slug: result.slug } }"
              target="_blank"
            >
              <v-list-item-content class="result-brief">
                <h4 class="movie-title">
                  {{ result.title }}
                </h4>
                <ul>
                  <li>
                    <v-icon color="yellow" size="14">mdi-star</v-icon
                    ><span class="ml-1">{{ result.imdb }}</span>
                  </li>
                  <li>|</li>
                  <li>{{ result.year }}</li>
                </ul>
              </v-list-item-content>
            </nuxt-link>
          </div>
        </v-list-item>
      </v-list>
    </v-card>

    <v-btn icon disabled>
      <v-progress-circular
        width="3"
        size="25"
        color="teal darken-3"
        indeterminate
        v-show="loading"
      ></v-progress-circular>
    </v-btn>

    <v-btn icon @click="clearInput">
      <v-icon color="grey">mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      query: "",
      results: [],
      loading: false,
      resultBox: false,
      totalcharacter: 0
    };
  },

  watch: {
    query(after, before) {
      if (this.query.length >= 3) {
        this.loading = true;
        this.getResult();
      }
    }
  },
  methods: {
    getResult() {
      this.results = [];
      axios
        .post("/search", {
          query: this.query
        })
        .then(response => {
          this.results = response.data;
          this.loading = false;
        });
    },
    clearInput() {
      this.query = "";
    },
    onClickOutside() {
      this.query = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.result-brief {
  margin-left: 1em;
  p {
    font-size: 13px;
    line-height: 17px;
    margin-top: 2px;
    color: #adadad;
  }
}
.single-result {
  border-bottom: 1px solid #333;
}

ul {
  padding: 0px;
  margin-top: 6px;
  li {
    list-style: none;
    display: inline;
    padding-right: 8px;
    font-size: 11px;
    color: #dcdcdc;
  }
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding-left: 6px;
  }
}
.search-box {
  display: flex;
  position: relative;
  background: #f5f5f5c7;

  .search-input {
    input {
      outline: none;
      line-height: 45px;
      font-size: 1.1rem;
      padding-left: 1rem;
      width: 65vw;
      max-width: 65vw;
      transition: all 0.5s ease;
      &:focus {
        width: 65vw;
      }
      &::placeholder {
        color: #999;
      }
    }
  }
}
.resultCard {
  background: linear-gradient(to right, #023536 0%, #013a35 30%, #023536 100%);
  max-height: 380px;
  overflow-y: scroll;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  border-radius: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
  }
  .movie-title {
    color: #ededed;
  }
  .streaming-links {
    padding-right: 1.2rem;
  }
}
</style>
