<script setup>
defineProps({
  name: String,
  stock: String,
  price: String,
});
</script>
<template>
  <div
    class="flex w-full h-44 flex-row items-center justify-between border md:py-5 py-2 md:px-4 px-2"
  >
    <div class="flex w-full items-center md:gap-4 gap-2">
      <img
        width="100px"
        class="object-cover"
        src="@/assets/images/bedroom.png"
        alt="Sofa image"
      />

      <div class="flex flex-col justify-center">
        <p class="md:text-xl font-bold">{{ name }}</p>
        <p class="text-gray-500">
          Availability:
          <span class="font-medium text-green-600">{{ stock }}</span>
        </p>
      </div>
    </div>

    <div class="flex w-3/5 items-center justify-between flex-row">
      <p class="md:mt-2 md:text-xl font-bold text-violet-900">{{ price }}</p>

      <div class="mt-2 flex items-center">
        <button class="w-full px-2 bg-orange-600 py-2 lg:px-5 text-white">
          Add to cart
        </button>

        <i class="ml-5 cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clip-rule="evenodd"
            />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
