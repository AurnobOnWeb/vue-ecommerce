<template>
  <section
    class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
  >
    <!-- sidebar  -->
    <SideBar />

    <!-- /sidebar  -->

    <!-- option cards  -->

    <div class="mb-5 flex items-center justify-between px-5 lg:hidden">
      <div class="flex gap-3">
        <div class="py-5">
          <div class="flex items-center">
            <img
              width="40px"
              height="40px"
              class="rounded-full object-cover"
              src="../assets/images/avatar-photo.png"
              alt="Red woman portrait"
            />
            <div class="ml-5">
              <p class="font-medium text-gray-500">Hello,</p>
              <p class="font-bold">Sarah Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile product cards  -->

    <!-- Desktop product cards  -->
    <section class="w-full max-w-[1200px] grid-cols-1 gap-4 px-5 md:pb-10 grid">
      <WishlistContent
        name="Hellow"
        stock="in stock"
        price="200$"
      ></WishlistContent>
      <WishlistContent
        name="Hellow"
        stock="in stock"
        price="200$"
      ></WishlistContent>
      <WishlistContent
        name="Hellow"
        stock="in stock"
        price="200$"
      ></WishlistContent>
    </section>
    <!-- /Desktop product cards  -->
  </section>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import WishlistContent from "../components/WishlistContent.vue";
</script>

<style lang="scss" scoped></style>
