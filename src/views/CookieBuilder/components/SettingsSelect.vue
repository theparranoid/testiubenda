<template>
  <div class="settings-select">
    <div class="select-item">
      <span class="select-item-header"> Target countries </span>
    </div>
    <div class="select-item">
      <span class="select-item-header"> Legislation </span>
    </div>
    <div class="select-item">
      <span class="select-item-header"> Consent </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsSelect",
};
</script>

<style scoped lang="scss">
.settings-select {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 2px solid #eee;

  .select-item {
    width: 100%;
    padding: 10px;
    background-color: #eeeeee;
    margin-bottom: 10px;
  }
}
</style>
