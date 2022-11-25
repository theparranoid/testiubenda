<template>
  <div class="cookie-builder">
    <h1 class="builder-header">Configure your Cookie Solution</h1>
    <div class="builder-info">
      <div class="builder-select">
        <CookieSettings />
      </div>
      <div class="builder-preview">
        <BannerPreview :banner-config="config" />
      </div>
    </div>
    <div class="builder-footer">
      <button class="builder-footer-button">Save</button>
    </div>
  </div>
</template>

<script>
import BannerPreview from "@/views/CookieBuilder/components/BannerPreview.vue";
import CookieSettings from "@/views/CookieBuilder/components/CookieSettings.vue";
import store from "@/store";
export default {
  name: "CookieBuilder",
  components: { CookieSettings, BannerPreview },
  computed: {
    config() {
      return store.getters.getConfig;
    },
  },
  mounted() {
    store.dispatch("fetchBaseConfig");
  },
};
</script>

<style scoped lang="scss">
.cookie-builder {
  width: 100%;
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
  }

  .builder-select {
    width: 40%;
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
