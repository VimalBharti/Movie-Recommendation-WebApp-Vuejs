import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [], 
  },
  mutations: {
    TRENDING_MOVIES(state, trendmovies) { state.trendmovies = trendmovies; },
  },
  actions: {
    async trendingMovie({commit}){
      let res = await axios.get("/trending-movies");
      commit('TRENDING_MOVIES', res.data);
    },
  },
  modules: {},
});
