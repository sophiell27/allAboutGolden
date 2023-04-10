import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_API, VITE_PATH } = import.meta.env;
export default defineStore('frontStore', {
  state: () => ({
    categories: [
      '全部商品',
      '配件配飾',
      '居家配件',
      '床上用品',
      '科技配件',
      '衣物大全',
      '有狗亂入',
    ],
    currentCategory: '',
    allProducts: [],
    filteredProducts: [],
    loginStatus: false,
    localCart: [],
  }),
  getters: {
    getNewProducts: ({ allProducts }) => allProducts.slice(-3),
  },
  actions: {
    async getProducts(category = '') {
      const url = `${VITE_API}api/${VITE_PATH}/products/all`;
      await axios.get(url).then((res) => {
        const { products } = res.data;
        if (category) {
          this.currentCategory = category;
          this.filteredProducts = products.filter((item) => {
            if (item.category === category) {
              return item;
            }
            return item;
          });
        } else {
          this.currentCategory = '全部商品';
          this.allProducts = products;
        }
      });
    },
    getCatergory(category = '全部商品') {
      this.currentCategory = category;
    },
  },
});
