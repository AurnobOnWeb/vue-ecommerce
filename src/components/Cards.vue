<template>
  <div>
    <div
      class="border py-5 shadow-md transform transition duration-500 hover:scale-110"
    >
      <div class="flex justify-between px-4 pb-5">
        <p class="text-xl font-bold">{{ title }}</p>
      </div>

      <div class="flex flex-col px-4">
        <a class="flex items-center" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#FF5E0E"
            class="mr-3 h-4 w-4 text-violet-900"
          >
            <path
              d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
            />
            <path
              d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
            />
          </svg>
          {{ email }}</a
        >
        <a class="flex items-center" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#FF5E0E"
            class="mr-3 h-4 w-4 text-violet-900"
          >
            <path
              fill-rule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clip-rule="evenodd"
            />
          </svg>
          {{ phone }}</a
        >
        <a class="flex items-center" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#FF5E0E"
            class="mr-3 h-4 w-4 text-violet-900"
          >
            <path
              fill-rule="evenodd"
              d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z"
              clip-rule="evenodd"
            />
          </svg>
          {{ whatsapp }}</a
        >
        <a class="flex items-center" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#FF5E0E"
            class="mr-3 h-4 w-4 text-violet-900"
          >
            <path
              d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
            />
          </svg>
          {{ telegram }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  email: String,
  phone: String,
  whatsapp: String,
  telegram: String,
});
</script>

<style lang="scss" scoped></style>
