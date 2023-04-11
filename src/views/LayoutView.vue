<script>
import CategoryMenuCompoent from '@/components/CategoryMenuCompoent.vue';
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import _ from 'lodash';

export default {
  data() {
    return {
      searchValue: '',
      filteredValue: [],
    };
  },
  components: {
    CategoryMenuCompoent,
  },
  computed: {
    ...mapState(frontStore, ['allProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
    toggleBurger() {
      const el = this.$refs.mainOverlay;
      el.classList.toggle('hidden');
    },
    clickMainOverlay(e) {
      if (e.target === this.$refs.mainOverlay) {
        this.toggleBurger();
      }
    },
    scrollHeader() {
      const { topReminder, frontTop } = this.$refs;
      const method = (window.scrollY > 80) ? 'add' : 'remove';
      topReminder?.classList[method]('hidden');
      // header?.classList[method]('-mt-5');
      frontTop.classList[method]('bg-primary', 'text-dark');
    },
    toggleSearchBox() {
      const { searchBox } = this.$refs;
      searchBox.classList.toggle('hidden');
      this.searchValue = '';
      this.filteredValue = '';
    },
    searchFilter: _.debounce(function search() {
      const value = this.searchValue;
      (async () => {
        await this.getProducts();
      })();
      this.filteredValue = this.allProducts.filter((item) => item.title.includes(value));
    }, 500),
  },
  mounted() {
    window.addEventListener('click', this.clickMainOverlay);
    window.addEventListener('scroll', this.scrollHeader);
  },
  beforeMount() {
    window.removeEventListener('click', this.clickMainOverlay);
    window.removeEventListener('scroll', this.scrollHeader);
  },
};
</script>
<template>
  <div class="fixed z-50 top-0 left-0 right-0  mb-6" ref="frontTop">
    <a href="#" class="z-50 w-full text-sm bg-primary text-dark py-1 flex items-center justify-center" ref="topReminder">
      訂單金額滿 <span class="font-inter font-extrabold">NT$ 900</span>，即可享有免運服務
      <span class="material-symbols-outlined text-xs">
        chevron_right
      </span>
    </a>
    <header class="relative px-3" ref="header">
      <div class="container flex items-center justify-between">
        <div class="flex items-center">
          <!-- burger -->
          <button type="button" class="material-symbols-outlined mr-4" @click="toggleBurger">
            menu
          </button>
          <h1 class="">
            <a href="#"
              class="block w-[130px] h-12 whitespace-nowrap overflow-hidden indent-[101%] bg-logo bg-no-repeat bg-contain my-3">遍地黃金</a>
          </h1>
          <!-- nav  -->
          <div class="hidden absolute top-0 bottom-0 left-0 right-0 z-20 bg-dark/10 w-full h-screen " ref="mainOverlay">
            <nav class="top-7 left-0 text-lg font-bold text-fog-500 bg-white pl-4 pr-6 pt-3 w-3/4 h-screen" id="nav"
              ref="nav">
              <div class="flex justify-between items-center mb-2">
                <img src="@/assets/images/layout/Logo.svg" alt="logo" class="h-12 w-[130px]">
                <button type="button" class="material-symbols-outlined" @click="toggleBurger">
                  close
                </button>
              </div>
              <ul class="flex flex-col items-center">
                <li class="group hover:opacity-70">
                  <RouterLink to="/products" class="block py-4" @click="toggleBurger">產品一覽</RouterLink>
                  <div class="hidden group-hover:block">
                    <CategoryMenuCompoent @toggle-menu="toggleBurger"></CategoryMenuCompoent>
                  </div>
                </li>
                <li class="block py-4 hover:opacity-70"><a href="" @click.prevent="toggleBurger">黃金專欄</a></li>
                <li class="block py-4 hover:opacity-70"><a href="" @click.prevent="toggleBurger">查詢訂單</a></li>
                <li class="block py-4 hover:opacity-70"><a href="" @click.prevent="toggleBurger">登入 / 註冊</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <ul class="flex items-center">
          <li class="relative">
            <button type="button" class="material-symbols-outlined py-5 pr-4" @click="toggleSearchBox" ref="searchButton">
              search
            </button>
            <div class="absolute top-[50px] right-0  hidden  bg-white p-6 "
              ref="searchBox">
                <input type="text"
                  class=" border-0 bg-transparent text-fog-400 bg-fog-100 placeholder:text-secondary  focus:border-0  focus:outline-fog-300/50 p-1 mb-1"
                  placeholder="想找什麼？" v-model="searchValue" @keyup="searchFilter">
              <template v-if="filteredValue.length">
                <!-- path: "/products/category/:category/product/:productid", -->
                <ul >
                  <li v-for="value in filteredValue" :key="value.id">
                    <RouterLink :to="`/products/category/${value.category}/product/${value.id}`"
                      class="block p-1 mb-1 text-secondary hover:opacity-70 underline" @click="toggleSearchBox">{{ value.title }}
                  </RouterLink>
                  </li>
                </ul>
              </template>
            </div>
          </li>
          <li class="relative">
            <button type="button" class="material-symbols-outlined py-5 pr-4">
              shopping_cart
            </button>
            <p
              class="absolute top-3 right-0 w-6 h-6 rounded-full bg-dark text-white font-inter text-sm  flex items-center justify-center">
              0
            </p>
          </li>
        </ul>
      </div>
    </header>
  </div>
  <!-- mt: 28+72  -->
  <div class="mt-[108px]">
    <RouterView />
  </div>
  <footer class="bg-fog-200">
    <!-- join member cta -->
    <div class="bg-[url('@/assets/images/layout/footer-CTA-sm.jpg')] px-3 py-6">
      <h4 class="text-lg font-bold text-center text-white mb-6">超過<span
          class="px-1 text-h2 text-primary ">90%</span>的顧客都選擇我們
        <br class="mb-1">
        您也值得擁有最優質的購物體驗！
      </h4>
      <button type="button" class="pillBtn flex mx-auto">立即加入會員
        <span class="material-symbols-outlined">
          chevron_right
        </span></button>
    </div>
    <div class="container pt-5 pb-4">
      <ul class="text-center text-h6" ref="mainMenu">
        <li><a href="" class="block py-3">關於我們</a></li>
        <li><a href="" class="block py-3">聯絡我們</a></li>
        <li><a href="" class="block py-3">運費 / 退貨說明</a></li>
        <li><a href="" class="block py-3">私隱條款</a></li>
      </ul>
      <small class="text-center text-fog-500 mt-3 ">此網站僅做為前端 Side Project 作品練習，不做商業用途，謝謝。
      </small>
    </div>
  </footer>
</template>
