<template>
  <div class="cookie-settings">
    <div class="settings-item">
      <span class="settings-item-header"> Target countries </span>
      <div class="settings-item-controls">
        <div v-for="option in getSettings('targetCountries')" :key="option.id">
          <input
            type="radio"
            name="targetCountries"
            :value="option.value"
            v-model="targetCountries"
            :id="option.id"
          />
          <label :for="option.id">{{ option.name }}</label>
        </div>
      </div>
    </div>
    <div class="settings-item">
      <span class="settings-item-header"> Legislation </span>
      <div class="settings-item-controls">
        <div v-for="option in getSettings('legislation')" :key="option.value">
          <input
            type="checkbox"
            :name="option.name"
            :id="option.value"
            v-model="self()[option.value]"
          />
          <label :for="option.value">{{ option.name }}</label>
        </div>
      </div>
    </div>
    <div class="settings-item">
      <span class="settings-item-header"> Consent </span>
      <div class="settings-item-controls">
        <div v-for="option in getSettings('consent')" :key="option.value">
          <input
            type="checkbox"
            :name="option.name"
            :id="option.value"
            v-model="self()[option.value]"
          />
          <label :for="option.value">{{ option.name }}</label>
        </div>
      </div>
    </div>
    <div class="settings-item">
      <span class="settings-item-header"> Buttons visibility </span>
      <div class="settings-item-controls">
        <div
          v-for="option in getSettings('buttonsVisibility')"
          :key="option.value"
        >
          <input
            type="checkbox"
            :name="option.name"
            :id="option.value"
            v-model="self()[option.value]"
          />
          <label :for="option.value">{{ option.name }}</label>
        </div>
      </div>
    </div>
    <div class="settings-item">
      <span class="settings-item-header"> Close button behaviour </span>
      <div class="settings-item-controls">
        <div v-for="option in getSettings('closeButton')" :key="option.value">
          <input
            type="checkbox"
            :name="option.name"
            :id="option.value"
            v-model="self()[option.value]"
          />
          <label :for="option.value">{{ option.name }}</label>
        </div>
      </div>
    </div>
    <div class="settings-item">
      <span class="settings-item-header"> Banner title </span>
      <div class="settings-item-controls">
        <textarea v-model="title"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import cookieSettings from "@/views/CookieBuilder/cookieSettings";
import store from "@/store";
import legalIssuesConfig from "@/views/CookieBuilder/legalIssuesConfig";

export default {
  name: "SettingsSelect",
  computed: {
    ...mapFields([
      "config.gdpr",
      "config.ccpa",
      "config.targetCountries",
      "config.consentByScroll",
      "config.perPurposeConsent",
      "config.banner.acceptButtonDisplay",
      "config.banner.rejectButtonDisplay",
      "config.banner.closeButtonDisplay",
      "config.banner.closeButtonRejects",
      "config.banner.title",
    ]),
    config() {
      return store.getters.getConfig;
    },
  },
  methods: {
    getSettings(setting) {
      return cookieSettings.filter((item) => item.section === setting);
    },
    checkLegalIssues() {
      legalIssuesConfig(this.config);
    },
    self() {
      return this;
    },
  },
  watch: {
    config: {
      handler: function () {
        this.checkLegalIssues();
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.cookie-settings {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 2px solid #eee;
  overflow: auto;

  .settings-item {
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;
    margin-bottom: 10px;
    border-radius: 4px;

    &-header {
      font-weight: bold;
    }

    &-controls {
      margin-top: 20px;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  input[type="radio"],
  input[type="checkbox"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: inline-block;
    background-color: #ddd;
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: 0.2s;
  }

  label:hover {
    background-color: #dfd;
  }

  input[type="radio"]:checked + label,
  input[type="checkbox"]:checked + label {
    background-color: #1cc691;
    color: #ffffff;
  }

  textarea {
    padding: 10px 20px;
    width: 100%;
    border: 2px solid #444;
  }
}
</style>
