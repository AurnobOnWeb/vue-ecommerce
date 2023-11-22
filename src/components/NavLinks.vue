<template>
  <RouterLink
    class="font-semibold text-white hover:text-gray-200 transition-colors duration-200"
    :to="{ name: routeName }"
    >{{ title }}</RouterLink
  >
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  routeName: String,
  title: String,
});
</script>

<style lang="scss" scoped></style>
