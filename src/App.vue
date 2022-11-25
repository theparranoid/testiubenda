<script>
import CookieBuilder from "@/views/CookieBuilder/CookieBuilder.vue";
export default {
  components: { CookieBuilder },
};
</script>

<template>
  <div class="main-wrapper">
    <CookieBuilder />
  </div>
</template>

<style scoped>
.main-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #eee;
}
</style>
