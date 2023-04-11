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
    getFilterCategoryProducts: ({ filteredProducts }) => filteredProducts.slice(-3),
  },
  actions: {
    async getProducts(category = '') {
      const url = `${VITE_API}api/${VITE_PATH}/products/all`;
      await axios.get(url).then((res) => {
        const { products } = res.data;
        if (category) {
          this.currentCategory = category;
          const newProducts = products.filter(
            (item) => item.category === category,
          );
          this.filteredProducts = newProducts;
        } else {
          this.currentCategory = '全部商品';
          this.allProducts = products;
        }
      });
    },
    // getCatergory(category = '全部商品') {
    //   this.currentCategory = category;
    // },
    addCart(product, productQty) {
      if (!this.loginStatus) {
        console.log('請先登入');
        return;
      }
      let qty = productQty;
      let method = 'post';
      let url = `${VITE_API}api/${VITE_PATH}/cart`;
      if (product.qty) {
        method = 'put';
        url = `${VITE_API}api/${VITE_PATH}/cart/${product.id}`;
        qty += product.qty;
      }
      const data = {
        product_id: product.id,
        qty,
      };
      axios[method](url, { data })
        .then(() => {
          // this.toastMessge('已加入購物車！');
          this.getCarts();
        })
        .catch(() => {
          // this.alertMessage('加入購物車發生錯誤');
        });
    },
    login(value) {
      // this.changeLoading(true);
      const localData = JSON.parse(localStorage.getItem('login'));
      const { username, password } = localData;
      const data = {
        username: value.登入名稱,
        password: value.登入密碼,
      };
      if (username === data.username && password === data.password) {
        this.loginStatus = true;
        this.router.go(-1);
      } else {
        console.log('不成功登入');
        this.loginStatus = false;
      }
    },
    logout() {
      this.loginStatus = false;
      this.router.replace('/');
    },
  },
});
