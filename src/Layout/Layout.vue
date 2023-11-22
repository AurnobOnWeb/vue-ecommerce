<template>
  <main class="flex flex-col h-screen justify-between">
    <TopHeader></TopHeader>
    <Header></Header>
    <RouterView />
    <Footer />
  </main>
</template>

<script setup>
import TopHeader from "./TopHeader.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss" scoped></style>
