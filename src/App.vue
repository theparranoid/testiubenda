<script>
import CookieBuilder from "@/views/CookieBuilder/CookieBuilder.vue";
import store from "@/store";
export default {
  components: { CookieBuilder },
  computed: {
    loading() {
      return store.getters.getLoadingState;
    },
  },
};
</script>

<template>
  <div class="main-wrapper">
    <CookieBuilder />
    <notifications />
    <div v-if="loading" class="loader">...loading</div>
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #eee;
  position: relative;

  .loader {
    position: fixed;
    background-color: black;
    z-index: 999;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: white;
  }
}
</style>
