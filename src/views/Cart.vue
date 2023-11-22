<template>
  <section
    class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10 w-full"
  >
    <!-- Mobile cart table  -->

    <!-- /Mobile cart table  -->

    <!-- Desktop cart table  -->
    <section
      class="h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
    >
      <table class="table-fixed">
        <thead class="h-16 bg-neutral-100">
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- 1 -->

          <CartItems
            title="Camera"
            size="600D"
            price="900"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbISTsaeb5gPqsBxhsldOZ9E1G7iCeWLo2T2jBy-eN&s"
            @click="$emit('increment', 'decrement')"
          >
          </CartItems>
          <CartItems
            title="Iphone 11"
            size="Pro max"
            price="1000"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbISTsaeb5gPqsBxhsldOZ9E1G7iCeWLo2T2jBy-eN&s"
          >
          </CartItems>
          <CartItems
            title="Smart Watch"
            size="2 inch"
            price="600"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbISTsaeb5gPqsBxhsldOZ9E1G7iCeWLo2T2jBy-eN&s"
            @s="increment"
          >
          </CartItems>

          <!-- 3 -->
        </tbody>
      </table>
    </section>
    <!-- /Desktop cart table  -->
    {{ totalprice }}
    <!-- Summary  -->

    <section class="mx-auto w-full px-4 md:max-w-[400px]">
      <div class="">
        <div class="border py-5 px-4 shadow-md">
          <p class="font-bold">ORDER SUMMARY</p>

          <div class="flex justify-between border-b py-5">
            <p>Subtotal</p>
            <p>$1280</p>
          </div>

          <div class="flex justify-between border-b py-5">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div class="flex justify-between py-5">
            <p>Total</p>
            <p>$1280</p>
          </div>

          <RouterLink :to="{ name: 'Checkout' }">
            <button class="w-full bg-violet-900 px-5 py-2 text-white">
              Proceed to checkout
            </button>
          </RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import CartItems from "../components/CartItems.vue";
</script>

<style lang="scss" scoped></style>
