<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';

export default {
  data() {
    return {
      loginStatus: false,
    };
  },
  components: {
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ['allProducts', 'filteredProducts', 'currentCategory']),
  },
  method: {
    ...mapActions(frontStore, ['getProducts', 'getCatergory']),
  },
};
</script>
<template>
  <ProductListComponent :products="this.$route.params.category? filteredProducts: allProducts"></ProductListComponent>
</template>
