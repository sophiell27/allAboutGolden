<script>
import ProductListComponent from '../../components/ProductListComponent.vue';

export default {
  data() {
    return {
      categories: ['全部商品', '配件配飾', '居家配件', '床上用品', '科技配件', '衣物大全', '有狗亂入'],
      currentCategory: '全部商品',
    };
  },
  components: {
    ProductListComponent,
  },
  methods: {
    toggleCategoryMenu() {
      const el = this.$refs.categoryList;
      el.classList.toggle('hidden');
    },
    scrollCategoryMenu() {
      const { productsMav } = this.$refs;
      const method = (window.scrollY > 80) ? 'add' : 'remove';
      productsMav.classList[method]('-mt-6');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollCategoryMenu);
  },
};
</script>
<template>
  <main>
    <nav class="relative mb-6" ref="productsMav">
      <button type="button"
        class="w-full text-center py-1 hover:bg-primary hover:text-dark flex items-center justify-center"
        @click="toggleCategoryMenu"> <span>
          全部商品 <span class="material-symbols-outlined text-sm ml-1 "> expand_more</span>
          <!-- expand_less  -->
        </span></button>
      <div class="hidden absolute top-0 w-full bg-fog-100 rounded-md p-4" ref="categoryList">
        <ul class=" flex flex-col items-center">
          <li class="py-2 pl-4 pr-2 hover:bg-highlight hover:text-dark" v-for="category in categories"
            :key="'cat' + category" :class="{ 'bg-primary/50 rounded-sm': category === currentCategory }">
            <RouterLink to="/products" class="" @click="toggleCategoryMenu"> {{ category }} <span
                class="material-symbols-outlined text-sm ml-2">chevron_right
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- products list  -->
    <ProductListComponent></ProductListComponent>
  </main>
</template>
