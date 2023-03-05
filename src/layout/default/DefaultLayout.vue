<template>
  <div class="layout">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultLayout",
});
</script>
<style lang="scss" scoped>
@import "style";
</style>
