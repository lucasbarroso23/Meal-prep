import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
  },
  getters: {},
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      var url = new URL(`${state.apiUrl}`),
        params = {
          q: plan,
          app_id: process.env.VUE_APP_APIID,
          app_key: process.env.VUE_APP_APIKEY,
          from: 0,
          to: 9,
        };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      try {
        let response = await fetch(url);
        let recipes = await response.json();
        commit('setRecipes', recipes.hits);
      } catch (error) {
        commit('setRecipes', []);
      }
    },
  },
  modules: {},
});
