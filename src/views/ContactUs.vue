<script setup>
import Cards from "../components/Cards.vue";
import TopBanner from "../components/TopBanner.vue";
</script>

<template>
  <TopBanner title="Contact" description="Contact Us With Pleasure!" />
  <section class="w-full flex-grow">
    <section
      class="mx-auto w-full my-6 grid max-w-[1200px] grid-cols-1 gap-8 px-5 pb-10 lg:grid-cols-3 lg:pt-10"
    >
      <Cards
        title="Delivery"
        email="email@gmail.com"
        phone="000000000000"
        whatsapp="000000000000"
        telegram="@telegram"
      />
      <Cards
        title="Support"
        email="email@gmail.com"
        phone="000000000000"
        whatsapp="000000000000"
        telegram="@telegram"
      />
      <Cards
        title="Careers"
        email="maybell@delivery.org"
        phone=" +8(911)339-88-88"
        whatsapp=" +8(911)339-88-88"
        telegram="@telegram"
      />
    </section>

    <!-- Contact section  -->

    <section class="mx-auto my-5 text-center">
      <h2 class="text-3xl font-bold">Have another question?</h2>
      <p>Complete the form below</p>
    </section>

    <!-- Form  -->

    <form class="mx-auto my-5 max-w-[600px] px-5 pb-10" @submit.prevent="">
      <div class="mx-auto">
        <div class="my-3 flex w-full gap-2">
          <input
            class="w-1/2 border px-4 py-2"
            type="email"
            placeholder="E-mail"
          />
          <input
            class="w-1/2 border px-4 py-2"
            type="text"
            placeholder="Full Name"
          />
        </div>
      </div>

      <select class="mb-3 w-full border px-4 py-2" name="pets" id="pet-select">
        <option value="">Please choose a category</option>
        <option value="delivery">Delivery</option>
        <option value="support">Support</option>
        <option value="profile">Profile</option>
        <option value="careers">Careers</option>
        <option value="another">Another category</option>
      </select>

      <textarea
        class="w-full border px-4 py-2"
        placeholder="Write a commentary..."
        name=""
        id=""
      ></textarea>

      <div
        class="lg:items:center container mt-4 flex flex-col justify-between lg:flex-row"
      >
        <div class="flex items-center">
          <input class="mr-3" type="checkbox" />
          <label for="checkbox">
            I have read and agree with
            <a href="#" class="text-orange-600">terms &amp; conditions</a>
          </label>
        </div>
        <button
          class="my-3 bg-orange-600 px-4 py-2 lg:my-0 text-white hover:bg-orange-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </div>
    </form>

    <!-- /Form  -->
  </section>
</template>

<style lang="scss" scoped></style>
