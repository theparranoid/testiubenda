<template>
  <div class="banner-preview">
    {{ bannerConfig }}
  </div>
</template>

<script>
export default {
  name: "BannerPreview",
  props: {
    bannerConfig: Object,
  },
};
</script>

<style scoped></style>
