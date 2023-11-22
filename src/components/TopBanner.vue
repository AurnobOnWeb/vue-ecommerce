<template>
  <div class="relative">
    <img
      class="w-full object-cover brightness-50 filter lg:h-[300px]"
      src="https://i.pinimg.com/originals/29/a2/dc/29a2dc706adcb70244bee0b4f1394dd6.jpg"
      alt="Banner Image"
    />

    <div
      class="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
    >
      <h1 class="text-4xl font-bold sm:text-5xl">{{ title }}</h1>
      <p
        class="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base text-gray-200"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description"]);
</script>

<style lang="scss" scoped></style>
