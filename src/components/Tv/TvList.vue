<template>
  <tr>
    <td>
      <v-img 
        :src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${tv.image}`" 
        :lazy-src="`http://d3khwxx4aph9v3.cloudfront.net/movies/${tv.image}`" 
        height="62px" 
        width="62px"
      ></v-img>
    </td>
    <td>
      <span>{{ tv.title }}</span>
    </td>
    <td>{{ tv.year }}</td>
    <td>
      <span class="movie-genre" v-for="(genre, index) in tv.genres" :key="index">
        <span>{{ genre.title }}</span>
        <span class="mr-1" v-if="index + 1 < tv.genres.length">,</span>
      </span>
    </td>
    <td class="text-center">{{ tv.imdb }}</td>
    <td class="text-center">
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
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    tv: Object,
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