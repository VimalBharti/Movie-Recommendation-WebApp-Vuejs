<template>
  <tr>
    <td>
      <v-img 
        :src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${movie.image}`" 
        :lazy-src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${movie.image}`" 
        height="62px" 
        width="62px"
      ></v-img>
    </td>
    <td>
      <span>{{ movie.title }}</span>
    </td>
    <td>{{ movie.year }}</td>
    <td>
      <span class="movie-genre" v-for="(genre, index) in movie.genres" :key="index">
        <span>{{ genre.title }}</span>
        <span class="mr-1" v-if="index + 1 < movie.genres.length">,</span>
      </span>
    </td>
    <td class="text-center">{{ movie.imdb }}</td>
    <td class="text-center">
        <v-btn :href="movie.prime" target="_blank" fab x-small v-if="movie.prime" color="grey darken-2">
            <v-avatar size="30" v-if="movie.prime"><img src="@/assets/images/prime.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.netflix" target="_blank" fab x-small v-if="movie.netflix" color="grey darken-2">
            <v-avatar size="30" v-if="movie.netflix"><img src="@/assets/images/netflix.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.hotstar" target="_blank" fab x-small v-if="movie.hotstar" color="grey darken-2">
            <v-avatar size="30" v-if="movie.hotstar"><img src="@/assets/images/hotstar.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.zee" target="_blank" fab x-small v-if="movie.zee" color="grey darken-2">
            <v-avatar size="30" v-if="movie.zee"><img src="@/assets/images/zee.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.sony" target="_blank" fab x-small v-if="movie.sony" color="grey darken-2">
            <v-avatar size="30" v-if="movie.sony"><img src="@/assets/images/sony.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.eros" target="_blank" fab x-small v-if="movie.eros" color="grey darken-2">
            <v-avatar size="30" v-if="movie.eros"><img src="@/assets/images/eros.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.tvf" target="_blank" fab x-small v-if="movie.tvf" color="grey darken-2">
            <v-avatar size="30" v-if="movie.tvf"><img src="@/assets/images/tvf.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.showtime" target="_blank" fab x-small v-if="movie.showtime" color="grey darken-2">
            <v-avatar size="30" v-if="movie.showtime"><img src="@/assets/images/showtime.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.mxplayer" target="_blank" fab x-small v-if="movie.mxplayer" color="grey darken-2">
            <v-avatar size="30" v-if="movie.mxplayer"><img src="@/assets/images/mxplayer.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.epix" target="_blank" fab x-small v-if="movie.epix" color="grey darken-2">
            <v-avatar size="30" v-if="movie.epix"><img src="@/assets/images/epix.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.starz" target="_blank" fab x-small v-if="movie.starz" color="grey darken-2">
            <v-avatar size="30" v-if="movie.starz"><img src="@/assets/images/starz.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.voot" target="_blank" fab x-small v-if="movie.voot" color="grey darken-2">
            <v-avatar size="30" v-if="movie.voot"><img src="@/assets/images/voot.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.youtube" target="_blank" fab x-small v-if="movie.youtube" color="grey darken-2">
            <v-avatar size="30" v-if="movie.youtube"><img src="@/assets/images/youtube.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.apple" target="_blank" fab x-small v-if="movie.apple" color="grey darken-2">
            <v-avatar size="30" v-if="movie.apple"><img src="@/assets/images/apple.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.mubi" target="_blank" fab x-small v-if="movie.mubi" color="grey darken-2">
            <v-avatar size="30" v-if="movie.mubi"><img src="@/assets/images/mubi.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.cbs" target="_blank" fab x-small v-if="movie.cbs" color="grey darken-2">
            <v-avatar size="30" v-if="movie.cbs"><img src="@/assets/images/cbs.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.hbo" target="_blank" fab x-small v-if="movie.hbo" color="grey darken-2">
            <v-avatar size="30" v-if="movie.hbo"><img src="@/assets/images/hbo.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.hulu" target="_blank" fab x-small v-if="movie.hulu" color="grey darken-2">
            <v-avatar size="30" v-if="movie.hulu"><img src="@/assets/images/hulu.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.tubi" target="_blank" fab x-small v-if="movie.tubi" color="grey darken-2">
            <v-avatar size="30" v-if="movie.tubi"><img src="@/assets/images/tubi.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.jio" target="_blank" fab x-small v-if="movie.jio" color="grey darken-2">
            <v-avatar size="30" v-if="movie.jio"><img src="@/assets/images/jio.png" /></v-avatar>
        </v-btn>
        <v-btn :href="movie.other" target="_blank" fab x-small v-if="movie.other" color="grey darken-2">
            <v-avatar size="30" v-if="movie.other"><img src="@/assets/images/other.png" /></v-avatar>
        </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    movie: Object,
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
</style>