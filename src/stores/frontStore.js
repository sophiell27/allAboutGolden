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
  }),
  getters: {
    getNewProducts: ({ allProducts }) => allProducts.slice(-3),
  },
  actions: {
    async getProducts() {
      const url = `${VITE_API}api/${VITE_PATH}/products/all`;
      await axios.get(url).then((res) => {
        this.allProducts = res.data.products;
      });
    },
    getCatergory(category = '全部商品') {
      this.currentCategory = category;
    },
  },
});
