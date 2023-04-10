<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import { gsap, Back, Bounce } from 'gsap';
import ProductListComponent from '@/components/ProductListComponent.vue';

export default {
  components: {
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ['getNewProducts', 'allProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
    dogAnimate() {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      });
      tl.set('.dogAni, .ballAni', { opacity: 0 })
        // .from('.bannerLogo', { opacity: 'random(0.5, 1.5)', duration: 1 })
        .fromTo('.dogAni', {
          x: -200,
          rotation: 10,
        }, {
          x: 0,
          opacity: 100,
          rotation: 0,
          duration: 1.5,
        }, '<')
        .from(
          '.ballAni',
          {
            opacity: 0, x: 200, rotation: 360, duration: 1.5, ease: Back.easeOut,
          },
        )
        .from('.dogAni', { y: 20, ease: Bounce.easeOut }, '<');
    },
  },
  mounted() {
    this.getProducts();
    this.dogAnimate();
  },
};
</script>
<template>
  <main>
    <!-- -mt: 72 +24  -->
    <section class="bg-[url('@/assets/images/home/hero-bg-sm.svg')] bg-cover -mt-24  pb-[184px] mb-6 overflow-hidden">
      <div class="container pt-24">
        <img src="@/assets/images/home/hero-typo.svg" alt="All about golden retrievers" class="w-[200px] h-14 mb-4">
        <h3 class="text-lg font-bold mb-4">讓您輕鬆一次購足
          <br class="mb-1">
          足高品質的<span class="px-1 ml-1 bg-secondary text-white inline-block">黃金獵犬精品</span>
          <br class="mb-2">
          享受免運優惠！
        </h3>
        <button type="button" class="pillBtn">大家都買什麼
          <span class="material-symbols-outlined">
            chevron_right
          </span>
        </button>
        <div class="w-full relative">
          <img src="@/assets/images/home/dog.svg" alt="dog image" class="dogAni absolute -left-24 w-[400px] overflow-hidden">
        <img src="@/assets/images/home/dogBall.svg" alt="football image" class="ballAni absolute top-20 left-[250px] w-[135px]">
        </div>
      </div>
    </section>
    <div class="container">
      <!-- 產品類別 -->
      <section class="mb-6">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">產品類別</h2>
        <ul class="grid grid-cols-6 ">
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-asseccary.svg" alt="category icon">
              <h4>配件配飾</h4>
            </a>
          </li>
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-homeDecro.svg" alt="category icon">
              <h4>居家配件</h4>
            </a>
          </li>
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-bedding.svg" alt="category icon">
              <h4>床上用品</h4>
            </a>
          </li>
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-tech.svg" alt="category icon">
              <h4>科技配件</h4>
            </a>
          </li>
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-clothing.svg" alt="category icon">
              <h4>衣物大全</h4>
            </a>
          </li>
          <li class="col-span-2 mx-auto">
            <a href="" class="block px-4 py-3 hover:rounded-2xxl hover:bg-primary">
              <img src="@/assets/images/home/categoryIcons/cat-petstuff.svg" alt="category icon">
              <h4>有狗亂入</h4>
            </a>
          </li>
        </ul>
      </section>
      <!-- 最新消息 -->
      <section class="mb-6">
        <img src="@/assets/images/home/newsBanner/carousel_sm.svg" alt="news" class="w-full">
      </section>
      <!-- 最新上架 -->
      <section class="mb-6">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4">最新上架</h2>
        <ProductListComponent :products="getNewProducts"></ProductListComponent>
      </section>
    </div>
    <img src="@/assets/images/home/cuddleImg-sm.svg" alt="cuddle image" class="w-full mb-6">
    <!-- 們願意承諾您 -->
    <div class="container">
      <section class="mb-12">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4">我們願意承諾您</h2>
        <ul class="rounded-2xxl shadow-lg2 bg-white pt-8 pb-11 px-13 grid grid-cols-12 gap-y-9 ">
          <li class="col-span-12">
            <img src="@/assets/images/home/promise-img/proImg1.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 分享生活實用好物</h4>
          </li>
          <li class="col-span-12">
            <img src="@/assets/images/home/promise-img/proImg2.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 商品如實描述</h4>
          </li>
          <li class="col-span-12">
            <img src="@/assets/images/home/promise-img/proImg3.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 滿 NT$ 900 免運
            </h4>
          </li>
          <li class="col-span-12">
            <img src="@/assets/images/home/promise-img/proImg4.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 售後無憂有保障</h4>
          </li>
        </ul>
      </section>
      <!-- 顧客好評推薦 -->
      <section class="mb-10">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">顧客好評推薦</h2>
        <ul class="grid grid-cols-12 gap-y-6">
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg1.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2"><span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200">阿金</span><span
                  class="text-h6 text-fog-400 ml-4">柚木底座黃金頭像刻畫</span></h4>
              <p class="text-sm text-dark">非常滿意！雕刻技術非常精湛，顏色也非常漂亮。整體來說，這是一件非常精美的藝術品，值得收藏～實物比圖片更有質感！感覺值了～</p>
            </a>
          </li>
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg2.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2"><span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200">旺財媽媽</span><span
                  class="text-h6 text-fog-400 ml-4">藝術風 iPhone 14 pro 手機殼</span></h4>
              <p class="text-sm text-dark">對於藝術風iPhone 14
                Pro手機殼給予高度評價。手機殼的設計非常獨特，充滿藝術感，而且質感也很好。此外，手機殼的保護性能也非常出色，可以有效保護手機不受損。</p>
            </a>
          </li>
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg3.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2"><span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200">麻糬爸爸</span><span
                  class="text-h6 text-fog-400 ml-4">全人手繪畫黃金油畫</span></h4>
              <p class="text-sm text-dark">
                油畫非常精美，色彩鮮豔，繪畫技巧精湛，能夠看出畫家花了很多時間和精力。這不僅僅是一件藝術品，更是一個擁有深刻意義的作品。雖然油畫沒有連框，但是絲毫不影響畫作的美感，非常滿意。</p>
            </a>
          </li>
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg4.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2"><span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200">QQQ</span><span
                  class="text-h6 text-fog-400 ml-4">簡約水彩黃金圖案購物袋</span></h4>
              <p class="text-sm text-dark">讚讚讚，什麼都很好買欸。</p>
            </a>
          </li>
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg5.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2"><span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200">索菲亞</span><span
                  class="text-h6 text-fog-400 ml-4">華麗風格 iPhone 14 pro 手機殼</span></h4>
              <p class="text-sm text-dark">還沒有養狗，但能夠擁有可愛黃金的產品也好滿足！</p>
            </a>
          </li>
          <li class="col-span-12">
            <a href="" class="block rounded-2xxl shadow-lg2 bg-white pt-4 pb-6 px-3">
              <img src="@/assets/images/home/recommend-img/recomImg6.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mb-6 mx-auto">
              <h4 class="flex items-center justify-center mb-2">胖子<span
                  class="text-lg font-bold pr-4 border-r border-r-fog-200"></span><span
                  class="text-h6 text-fog-400 ml-4">單一尺吋簡潔黃金全身T shirt</span></h4>
              <p class="text-sm text-dark">感謝網站提供專業的意見，T shirt穿上好合適，讚</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
