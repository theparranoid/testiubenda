import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    baseConfig: {}
  },
  getters: {
    getBaseConfig (state) {
      return state.baseConfig;
    }
  },
  actions: {
    async fetchBaseConfig({ commit }) {
      try {
        const data = await axios.get(
            "mock.json"
        );
        commit("SET_BASE_CONFIG", data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_BASE_CONFIG(state, config) {
      state.baseConfig = config;
    },
  }
})