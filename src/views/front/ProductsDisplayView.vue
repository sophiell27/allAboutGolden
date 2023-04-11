<script>
import ProductListComponent from '@/components/ProductListComponent.vue';
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
    };
  },
  components: {
    ProductListComponent,
  },
  watch: {
    $route(n, o) {
      if (n.params.category !== o.params.category) {
        this.getProducts(n.params.category);
      }
    },
  },
  computed: {
    ...mapState(frontStore, ['allProducts', 'filteredProducts', 'currentCategory']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
  },
  mounted() {
    const { category } = this.$route.params;
    if (category) {
      this.getProducts(category);
    } else {
      this.getProducts();
    }
  },
};
</script>
<template>
  <ProductListComponent :products="currentCategory === '全部商品'? allProducts:filteredProducts" ></ProductListComponent>
</template>
