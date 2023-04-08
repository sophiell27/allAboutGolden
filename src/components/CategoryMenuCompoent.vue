<script>
import frontStore from '@/stores/frontStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(frontStore, ['categories', 'currentCategory']),
  },
  methods: {
    // toggleCategoryMenu() {
    //   const el = this.$refs.catergoryOveray;
    //   el.classList.toggle('hidden');
    // },
  },
};
</script>
<template>
  <ul class="flex flex-col items-center text-fog-400 text-sm" ref="categoryList">
    <li class="py-2 pl-4 hover:text-highlight" v-for="category,index in categories" :key="'cat' + category"
      :class="{ 'text-highlight': category === currentCategory }">
      <RouterLink :to="index === 0 ? '/products' : `/products/category/${category}`" class="" @click="$emit('toggleMenu')"> {{ category }}
      </RouterLink>
    </li>
  </ul>
</template>
