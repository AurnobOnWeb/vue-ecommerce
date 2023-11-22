<script setup>
import { ref } from "vue";
import NavLinks from "../components/NavLinks.vue";
import MenuLinks from "../components/MenuLinks.vue";
import LoginModal from "../components/LoginModal.vue";
import SignUpModal from "../components/SignUpModal.vue";
const desktopMenuOpen = ref(false);

const categories = [
  {
    catName: "Bedroom",
    icon: "bed.svg",
    subcat: {
      subCatName: "Italian Bed",
      subCatName: "Queen Size Bed",
      subCatName: "King Size Bed",
      subCatName: "Wooden Craft Bed",
    },
  },
  {
    catName: "Lamp",
    icon: "lamp.svg",
    subcat: {
      subCatName: "Italian Purple Lamp",
      subCatName: "Apex Lamp",
      subCatName: "Pixar Lamp",
      subCatName: "Ambeient Night Lamp",
    },
  },
  {
    catName: "Table",
    subcat: {
      subCatName: "Soft Table",
      subCatName: "Easy Table",
      subCatName: "Purple Table",
      subCatName: "Craft Table",
    },
  },
  {
    catName: "Electronics",
    subcat: {
      subCatName: "Laptop",
      subCatName: "Mobile",
      subCatName: "Router",
      subCatName: "Hub",
    },
  },
  { catName: "Kitchen" },
  { catName: "Living Room" },
];
</script>
<template>
  <!-- Nav bar -->
  <!-- hidden on small devices -->

  <nav class="relative bg-orange-600 font-semibold">
    <div class="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
      <button
        @click="desktopMenuOpen = !desktopMenuOpen"
        class="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-slate-100 hover:bg-slate-200"
      >
        <div class="flex justify-around" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-1 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All categories
        </div>
      </button>

      <div class="mx-7 flex gap-8">
        <NavLinks title="Home" routeName="Home" />
        <NavLinks title="Category" routeName="Category" />
        <NavLinks title="About Us" routeName="AboutUs" />
        <NavLinks title="Contact us" routeName="ContactUs" />
      </div>

      <div class="ml-auto flex gap-4 px-5">
        <LoginModal />
        <span class="text-white">&#124;</span>
        <SignUpModal />
      </div>
    </div>
  </nav>
  <!-- /Nav bar -->

  <!-- Menu  -->
  <section
    v-if="desktopMenuOpen"
    @click="desktopMenuOpen = false"
    class="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white"
  >
    <div class="mx-auto flex max-w-[1200px] py-10">
      <div class="w-[300px] border-r">
        <ul class="px-5">
          <MenuLinks routeName="Login">Bed</MenuLinks>
        </ul>
      </div>

      <div class="flex w-full justify-between">
        <div class="flex gap-6">
          <div class="mx-5">
            <p class="font-medium text-gray-500">BEDS</p>
            <ul class="text-sm leading-8">
              <li><a href="product-overview.html">Italian bed</a></li>
              <li><a href="product-overview.html">Queen-size bed</a></li>
              <li>
                <a href="product-overview.html">Wooden craft bed</a>
              </li>
              <li><a href="product-overview.html">King-size bed</a></li>
            </ul>
          </div>

          <div class="mx-5">
            <p class="font-medium text-gray-500">LAMPS</p>
            <ul class="text-sm leading-8">
              <li>
                <a href="product-overview.html">Italian Purple Lamp</a>
              </li>
              <li><a href="product-overview.html">APEX Lamp</a></li>
              <li><a href="product-overview.html">PIXAR lamp</a></li>
              <li>
                <a href="product-overview.html">Ambient Nightlamp</a>
              </li>
            </ul>
          </div>

          <div class="mx-5">
            <p class="font-medium text-gray-500">BEDSIDE TABLES</p>
            <ul class="text-sm leading-8">
              <li><a href="product-overview.html">Purple Table</a></li>
              <li><a href="product-overview.html">Easy Bedside</a></li>
              <li><a href="product-overview.html">Soft Table</a></li>
              <li><a href="product-overview.html">Craft Table</a></li>
            </ul>
          </div>

          <div class="mx-5">
            <p class="font-medium text-gray-500">SPECIAL</p>
            <ul class="text-sm leading-8">
              <li><a href="product-overview.html">Humidifier</a></li>
              <li><a href="product-overview.html">Bed Cleaner</a></li>
              <li><a href="product-overview.html">Vacuum Cleaner</a></li>
              <li><a href="product-overview.html">Pillow</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- /Menu  -->
</template>

<style lang="scss" scoped></style>
