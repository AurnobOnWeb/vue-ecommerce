<template>
  <RouterLink :to="{ name: routeName }">
    <li
      class="active:blue-900 flex items-center gap-2 bg-orange-600 py-2 px-3 active:bg-orange-700 cursor-pointer text-white"
    >
      <slot></slot>
      <span class="ml-auto"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </li>
  </RouterLink>
</template>

<script setup>
defineProps({
  routeName: String,
});
</script>

<style lang="scss" scoped></style>
