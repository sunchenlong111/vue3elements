<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const menuVisiable = ref(screenWidth <= 500 ? false : true);
    provide("menuVisiable", menuVisiable);
    router.afterEach(() => {
      if (screenWidth <= 500) {
        menuVisiable.value = false;
      }
    });
  },
};
</script>
