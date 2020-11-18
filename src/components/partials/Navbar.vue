<template>
  <v-card tile flat class="navbar-card">
    <v-toolbar flat>

      <Search/>

      <v-spacer></v-spacer>

      <v-btn icon class="hidden-xs-only" @click="darkMode">
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import Search from '@/components/partials/Search';

export default {
  components: {
    Search
  },
  data() {
    return {
      query: "",
      results: []
    };
  },
  methods:{
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-card{
  border-bottom: 1px solid #efefef;
  border-left: 1px solid #efefef;
  padding-bottom: 0.4em;
  padding-top: 0.5em;
  z-index: 999;
}
</style>
