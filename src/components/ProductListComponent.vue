<script>
export default {
  props: ['products'],
};
</script>
<template>
  <div class="container">
    <ul class="grid grid-cols-6 gap-y-4 mb-4" v-if="products?.length">
    <li class="col-span-6 rounded-lg2 mb-4 group hover:shadow-lg2 hover:rounded-lg2 hover:bg-primary hover:text-dark"  v-for="product in products" :key="product.id">
      <a href="" class="flex flex-col justify-between">
        <div>
          <img :src="product.imageUrl" alt="product image" class="block rounded-t-lg2 w-full h-[360px] object-cover object-top mb-2 ">
          <h4 class="text-lg text-center mb-1">{{ product.title }}</h4>
        </div>
        <p class="text-sm font-extrabold text-center text-highlight">NT$ 350</p>
      </a>
    </li>
  </ul>
  </div>
</template>
