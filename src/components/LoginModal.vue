<template>
  <button id="show-modal" @click="showModal = true" class="text-white">
    Login
  </button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modals :show="showModal" @close="showModal = false">
      <template #body>
        <div class="">
          <p class="text-4xl font-bold">LOGIN</p>
          <p>
            Welcome back,<strong class="text-orange-600"> customer!</strong>
          </p>
        </div>

        <form class="mt-6 flex flex-col">
          <label for="email"
            >Email Address <strong class="text-orange-600">*</strong>
          </label>
          <input
            class="mb-3 mt-3 border px-4 py-2"
            type="email"
            placeholder="youremail@domain.com"
          />

          <label for="email"
            >Password <strong class="text-orange-600">*</strong></label
          >
          <input
            class="mt-3 border px-4 py-2"
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </form>

        <div class="mt-4 flex justify-between">
          <form class="flex gap-2">
            <input type="checkbox" />
            <label for="checkbox">Remember me</label>
          </form>
          <a href="#" class="text-orange-600">Forgot password</a>
        </div>

        <button class="my-5 w-full bg-orange-600 py-2 text-white">LOGIN</button>

        <p class="text-center text-gray-500">OR LOGIN WITH</p>

        <div class="my-5 flex gap-2">
          <button class="w-1/2 bg-blue-900 py-2 text-white">FACEBOOK</button>
          <button class="w-1/2 bg-orange-900 py-2 text-white">GOOGLE</button>
        </div>
      </template>
    </Modals>
  </Teleport>
</template>

<script setup>
import Modals from "./Modals.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<style lang="scss" scoped></style>
