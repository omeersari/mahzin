import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    started: false,
    player: ""
  },
  getters: {
    isStarted: state => state.started,
    currentPlayer: state => state.player
  },
  mutations: {
    startGame(state) {
      state.started = true;
    },
    PlayerName(state, payload) {
      state.player = payload;
    }
  },
  actions: {},
  modules: {}
});
