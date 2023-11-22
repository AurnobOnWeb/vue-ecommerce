<template>
  <button id="show-modal" @click="showModal = true" class="text-white">
    Sign up
  </button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modals :show="showModal" @close="showModal = false">
      <template #body>
        <div class="">
          <p class="text-2xl font-bold">CREATE AN ACCOUNT</p>
          <p>Register for new customer</p>
        </div>

        <form class="mt-1 flex flex-col">
          <label for="name">Full Name</label>
          <input
            class="mb-1 mt-1 border px-4 py-2"
            type="text"
            placeholder="Bogdan Bulakh"
          />

          <label class="mt-1" for="email">Email Address</label>
          <input
            class="mt-1 border px-4 py-2"
            type="email"
            placeholder="user@mail.com"
          />

          <label class="mt-1" for="email">Password</label>
          <input
            class="mt-1 border px-4 py-2"
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />

          <label class="mt-1" for="email">Confirm password</label>
          <input
            class="mt-1 border px-4 py-2"
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </form>

        <div class="mt-1 flex justify-between">
          <form class="flex gap-2">
            <input type="checkbox" />
            <label for="checkbox">
              I have read and agree with
              <a href="#" class="text-orange-600">terms &amp; conditions</a>
            </label>
          </form>
        </div>

        <button class="my-5 w-full bg-orange-600 py-2 text-white">
          SIGN UP
        </button>

        <p class="text-center text-gray-500">OR SiGN UP WITH</p>

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
