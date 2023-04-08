<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import ProductListComponent from '../../components/ProductListComponent.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ['allProducts', 'categories', 'currentCategory']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts', 'getCatergory']),
    toggleCategoryMenu() {
      const el = this.$refs.catergoryOveray;
      el.classList.toggle('hidden');
    },
    scrollCategoryMenu() {
      const { categoryBtn, categoryList } = this.$refs;
      const method = (window.scrollY > 80) ? 'add' : 'remove';
      categoryBtn.classList[method]('fixed', 'bottom-0');
      categoryList.classList[method]('fixed', 'bottom-0');
      // productsMav.classList[method]('-mt-6');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollCategoryMenu);
    this.getProducts();
    this.getCatergory();
  },
};
</script>
<template>
  <main class="relative">
      <!-- fixed bottom-0 -->
      <button type="button"
        class=" bg-fog-200 w-full text-center py-1 hover:bg-primary hover:text-dark flex items-center justify-center" ref="categoryBtn"
        @click="toggleCategoryMenu"> <span>
          {{ currentCategory }} <span class="material-symbols-outlined text-sm ml-1 "> expand_more</span>
          <!-- expand_less  -->
        </span>
      </button>
    <nav class="hidden absolute top-0 bottom-0 left-0 right-0 z-40" ref="catergoryOveray" @click="toggleCategoryMenu">
      <!--  -->
      <!-- fixed bottom-0  -->
        <ul class="w-full flex flex-col items-center rounded-md bg-fog-100" ref="categoryList">
          <li class="py-2 pl-4 pr-2 hover:bg-highlight hover:text-dark" v-for="category in categories"
            :key="'cat' + category" :class="{ 'bg-primary/50 rounded-sm': category === currentCategory }">
            <RouterLink to="/products" class="" @click="toggleCategoryMenu"> {{ category }} <span
                class="material-symbols-outlined text-sm ml-2">chevron_right
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    <!-- products list  -->
    <ProductListComponent :products="allProducts"></ProductListComponent>
  </main>
</template>
