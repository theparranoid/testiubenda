<template>
  <div v-if="!loading" class="banner-preview">
    <div v-if="config.banner.closeButtonDisplay" class="preview-close">X</div>
    <div class="preview-header">{{ config.banner.title }}</div>
    <div class="preview-body">
      <span>This banner will be shown for {{ getTargetCountries() }}. </span>
      <div v-if="anySettingsSelected()">
        <span>Your selected cookieSettings are:</span>
        <ul>
          <li v-for="(item, index) in getSettingsNames()" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <span v-else>You have no additional cookieSettings selected.</span>
    </div>
    <div class="preview-footer">
      <button v-if="config.banner.acceptButtonDisplay" class="preview-button">
        Accept
      </button>
      <button v-if="config.banner.rejectButtonDisplay" class="preview-button">
        Reject
      </button>
    </div>
  </div>
</template>

<script>
import cookieSettings from "@/views/CookieBuilder/cookieSettings";
import flattenObject from "@/helpers/flattenObject";
import store from "@/store";

export default {
  name: "BannerPreview",
  computed: {
    config() {
      return store.getters.getConfig;
    },
    loading() {
      return store.getters.getLoadingState;
    },
  },
  methods: {
    anySettingsSelected() {
      return Object.values(flattenObject(this.config)).some(
        (value) => value === true
      );
    },
    getTargetCountries() {
      if (!this.loading) {
        return cookieSettings.find(
          (item) => item.value === this.config.targetCountries
        ).name;
      }
      return "";
    },
    getSettingsNames() {
      if (!this.loading) {
        let names = [];
        const flattenedConfig = flattenObject(this.config);
        let selectedBannerSettings = Object.keys(flattenedConfig).filter(
          (key) => flattenedConfig[key] === true
        );
        selectedBannerSettings.forEach((item) =>
          names.push(cookieSettings.find((el) => el.value === item).name)
        );
        return names;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.banner-preview {
  padding: 20px;
  margin: 20px;
  background-color: black;
  color: white;
  line-height: 1.3;
  position: relative;
  box-shadow: #1cc691 0px 3px 8px;
  border-radius: 4px;

  .preview-close {
    width: 20px;
    height: 20px;
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .preview-header,
  .preview-body {
    margin-bottom: 20px;

    li {
      list-style: circle;
      margin-left: 20px;
    }
  }

  .preview-header {
    font-size: 1.3em;
  }

  .preview-button {
    background-color: #ddd;
    padding: 10px 20px;
    margin-right: 20px;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #dfd;
    }
  }
}
</style>
