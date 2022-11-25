import { createStore } from "vuex";
import axios from "axios";
import { getField, updateField } from "vuex-map-fields";

export default createStore({
  state: {
    baseConfig: {},
    config: {},
  },
  getters: {
    getConfig(state) {
      return state.config;
    },
    getBaseConfig(state) {
      return state.baseConfig;
    },
    getField,
  },
  actions: {
    async fetchBaseConfig({ commit }) {
      try {
        const data = await axios.get("mock.json");
        commit("SET_BASE_CONFIG", data.data);
        commit("UPDATE_CONFIG", data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_BASE_CONFIG(state, config) {
      state.baseConfig = config;
    },
    UPDATE_CONFIG(state, config) {
      state.config = config;
    },
    updateField,
  },
});
