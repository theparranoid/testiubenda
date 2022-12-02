import { createStore } from "vuex";
import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
import { notify } from "@kyvg/vue3-notification";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default createStore({
  state: {
    baseConfig: {
      banner: {},
    },
    config: {
      banner: {},
    },
    loading: Boolean,
  },
  getters: {
    getConfig(state) {
      return state.config;
    },
    getBaseConfig(state) {
      return state.baseConfig;
    },
    getLoadingState(state) {
      return state.loading;
    },
    getField,
  },
  actions: {
    async fetchBaseConfig({ commit }) {
      try {
        commit("CHANGE_LOADING_STATE", true);
        const data = await axios.get("mock.json");
        commit("SET_BASE_CONFIG", data.data);
        await timeout(3000);
        commit("UPDATE_CONFIG", data.data);
      } catch (error) {
        notify({
          title: "Error",
          text: error.message,
          type: "error",
        });
      } finally {
        commit("CHANGE_LOADING_STATE", false);
      }
    },
    async saveConfig({ commit, getters }) {
      try {
        commit("CHANGE_LOADING_STATE", true);
        await axios.post("/", getters.getConfig);
      } catch (error) {
        notify({
          title: "Error",
          text: error.message,
          type: "error",
        });
      } finally {
        commit("CHANGE_LOADING_STATE", false);
      }
    },
  },
  mutations: {
    CHANGE_LOADING_STATE(state, loading) {
      state.loading = loading;
    },
    SET_BASE_CONFIG(state, config) {
      state.baseConfig = JSON.parse(JSON.stringify(config));
    },
    UPDATE_CONFIG(state, config) {
      state.config = config;
    },
    updateField,
  },
});
