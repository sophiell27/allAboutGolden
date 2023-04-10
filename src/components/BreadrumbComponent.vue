<script>
export default {
  data() {
    return {};
  },
  props: ['product'],
};
</script>
<template>
  <div class="py-6 flex flex-col text-fog-400 text-sm md:flex-row md:items-center" v-if="product">
    <div class="flex">
      <!-- /products/category/:category -->
      <RouterLink to="/products" class="flex items-center md:text-4.5 hover:text-highlight ">
        <span class="pl-1 lg:pl-2">全部商品</span>
        <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
          chevron_right
        </span>
      </RouterLink>
      <RouterLink :to="`/products/category/${product.category}`"
        class="flex items-center md:text-4.5 hover:text-highlight " v-if="product.category != '全部商品'">
        <span class="pl-1 lg:pl-2">{{ product.category }}</span>
        <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
          chevron_right
        </span>
      </RouterLink>
    </div>
    <p class="pl-2 md:text-4.5 text-highlight" v-if="product.title">{{ product.title }}</p>
  </div>
</template>
