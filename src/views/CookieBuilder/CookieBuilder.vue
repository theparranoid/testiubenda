<template>
  <div class="cookie-builder">
    <h1 class="builder-header">Configure your Cookie Solution</h1>
    <div class="builder-info">
      <div class="builder-select">
        <CookieSettings />
      </div>
      <div class="builder-preview">
        <BannerPreview />
      </div>
    </div>
    <div class="builder-footer">
      <button
        @click="saveConfig"
        :disabled="isButtonDisabled"
        class="builder-footer-button"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import BannerPreview from "@/views/CookieBuilder/components/BannerPreview.vue";
import CookieSettings from "@/views/CookieBuilder/components/CookieSettings.vue";
import store from "@/store";
import deepEqual from "@/helpers/deepEqual";

export default {
  name: "CookieBuilder",
  components: { CookieSettings, BannerPreview },
  computed: {
    isButtonDisabled() {
      return deepEqual(store.getters.getBaseConfig, store.getters.getConfig);
    },
  },
  created() {
    store.dispatch("fetchBaseConfig");
  },
  methods: {
    saveConfig() {
      store.dispatch("saveConfig");
    },
  },
};
</script>

<style scoped lang="scss">
.cookie-builder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: #1cc691 0px 3px 8px;
  border-radius: 8px;

  .builder-header {
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;
  }

  .builder-info {
    width: 100%;
    display: flex;
    flex-grow: 1;
    height: 100%;
    overflow: auto;
  }

  .builder-select {
    width: 40%;
    overflow: auto;
  }

  .builder-preview {
    width: 60%;
  }

  .builder-footer {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    background-color: #eeeeee;
    border-top: 2px solid #1cc691;

    button {
      background-color: #ddd;
      padding: 10px 20px;
      font-size: 16px;
      border: 2px solid #444444;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #dfd;
      }
    }
  }
}
</style>
