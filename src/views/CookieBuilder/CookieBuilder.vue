<template>
  <div class="cookie-builder">
    <h1 class="builder-header">Configure your Cookie Solution</h1>
    <div class="builder-info">
      <div class="builder-select">
        <SettingsSelect />
      </div>
      <div class="builder-preview">
        <BannerPreview />
      </div>
    </div>
    <div class="builder-footer">
      <a href="/">Read documentation</a>
      <button class="builder-footer-button">Save</button>
    </div>
  </div>
</template>

<script>
import BannerPreview from "@/views/CookieBuilder/components/BannerPreview.vue";
import SettingsSelect from "@/views/CookieBuilder/components/SettingsSelect.vue";
import store from "@/store";
export default {
  name: "CookieBuilder",
  components: { SettingsSelect, BannerPreview },
  computed: {
    baseConfig() {
      return store.getters.getBaseConfig;
    }
  },
  mounted() {
    store.dispatch("fetchBaseConfig");
  }
};
</script>

<style scoped lang="scss">
.cookie-builder {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .builder-header {
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;
  }

  .builder-info {
    width: 100%;
  }

  .builder-select {
    width: 30%;
  }

  .builder-preview {
    width: 70%;
  }

  .builder-footer {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
  }
}
</style>
