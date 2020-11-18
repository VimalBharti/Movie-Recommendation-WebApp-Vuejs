<template>
  <v-col cols="12" md="2">
    <v-card class="movie-card transparent" flat>
        <router-link :to="{ name: 'tvs-slug', params: { slug: tv.slug } }" target="_blank">
          <v-img
            :src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${tv.image}`"
            height="280px"
            class="align-top"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2), rgba(0,0,0,.9)"
          >
            <template v-slot:placeholder>
              <v-sheet><v-skeleton-loader></v-skeleton-loader></v-sheet>
            </template>

            <div class="v-card--reveal">
              <div class="rating-box">
                <li class="color-teal" v-if="tv.imdb">{{tv.imdb | subRating}}</li>
              </div>
              <div class="availablity">
                <div class="icons">
                  <v-btn :href="tv.prime" target="_blank" fab x-small v-if="tv.prime" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.prime"><img src="@/assets/images/prime.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.netflix" target="_blank" fab x-small v-if="tv.netflix" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.netflix"><img src="@/assets/images/netflix.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.hotstar" target="_blank" fab x-small v-if="tv.hotstar" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.hotstar"><img src="@/assets/images/hotstar.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.zee" target="_blank" fab x-small v-if="tv.zee" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.zee"><img src="@/assets/images/zee.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.sony" target="_blank" fab x-small v-if="tv.sony" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.sony"><img src="@/assets/images/sony.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.eros" target="_blank" fab x-small v-if="tv.eros" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.eros"><img src="@/assets/images/eros.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.tvf" target="_blank" fab x-small v-if="tv.tvf" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.tvf"><img src="@/assets/images/tvf.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.showtime" target="_blank" fab x-small v-if="tv.showtime" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.showtime"><img src="@/assets/images/showtime.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.mxplayer" target="_blank" fab x-small v-if="tv.mxplayer" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.mxplayer"><img src="@/assets/images/mxplayer.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.epix" target="_blank" fab x-small v-if="tv.epix" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.epix"><img src="@/assets/images/epix.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.starz" target="_blank" fab x-small v-if="tv.starz" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.starz"><img src="@/assets/images/starz.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.voot" target="_blank" fab x-small v-if="tv.voot" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.voot"><img src="@/assets/images/voot.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.youtube" target="_blank" fab x-small v-if="tv.youtube" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.youtube"><img src="@/assets/images/youtube.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.apple" target="_blank" fab x-small v-if="tv.apple" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.apple"><img src="@/assets/images/apple.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.mubi" target="_blank" fab x-small v-if="tv.mubi" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.mubi"><img src="@/assets/images/mubi.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.cbs" target="_blank" fab x-small v-if="tv.cbs" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.cbs"><img src="@/assets/images/cbs.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.hbo" target="_blank" fab x-small v-if="tv.hbo" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.hbo"><img src="@/assets/images/hbo.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.hulu" target="_blank" fab x-small v-if="tv.hulu" color="grey darken-2">
                    <v-avatar size="30" v-if="tv.hulu"><img src="@/assets/images/hulu.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.tubi" target="_blank" fab x-small v-if="tv.tubi" color="grey darken-2">
                      <v-avatar size="30" v-if="tv.tubi"><img src="@/assets/images/tubi.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.jio" target="_blank" fab x-small v-if="tv.jio" color="grey darken-2">
                      <v-avatar size="30" v-if="tv.jio"><img src="@/assets/images/jio.png" /></v-avatar>
                  </v-btn>
                  <v-btn :href="tv.other" target="_blank" fab x-small v-if="tv.other" color="grey darken-2">
                      <v-avatar size="30" v-if="tv.other"><img src="@/assets/images/other.png" /></v-avatar>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-img>
        </router-link>

        <div class="movie-details-bottom">
          <div class="movie-title mt-2">
            <router-link :to="{ name: 'movies-slug', params: { slug: tv.slug } }" target="_blank">
              {{ tv.title }}
            </router-link>
          </div>
          
          <div class="movie-genres">
            <span v-for="(genre, index) in tv.genres" :key="index">
              <router-link
                :to="`/movies/genre/${genre.slug}`"
                class="cast-name-link"
                >{{ genre.title | subGenre }}</router-link
              ><span v-if="index + 1 < tv.genres.length" class="mr-1 comma">,</span>
            </span>
          </div>
        </div>

    </v-card>
  </v-col>
</template>

<script>

export default {
  props: {
    tv: Object
  },
  data() {
    return {};
  },
  filters: {
    subStr: function(string) {
      return string.substring(0,80) + '...';
    },
    subGenre: function(string) {
      return string.substring(0,10);
    },
    subRating: function(string) {
      return string.substring(0,3);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.6em;
  flex-direction: column;
  justify-content: space-between;
}
.rating-box{
  li{
    background: rgba($color: #000000, $alpha: 0.8);
    border-radius: 50%;
    width: 33px;
    height: 33px;
    text-align: center;
    padding-top: 4px;
    list-style: none;
    font-size: 14px;
    color: #ffffff;
  }
  .color-teal{ border: 2px solid teal; }
  .color-red{ border: 2px solid red; }
}

a{text-decoration: none;}

.movie-genres{
  a{
    color: #666;
    text-decoration: none;
    font-size: 12px;
    &:hover{
      text-decoration: underline;
    }
  }
}
.comma{color: #666;}
.movie-title{
  a{
    color: #444;
    font-size: 0.9rem;
    text-transform: capitalize;
    line-height: 17px;
    font-weight: bold;
  }
}
</style>
