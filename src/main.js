import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';
// vee-validate
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import '@/assets/all.css';
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
localize({ zh_TW: zhTW });
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
});
setLocale('zh_TW');
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
pinia.use(({ store }) => {
  const newStore = store;
  newStore.router = markRaw(router);
});
app.use(VueAxios, axios);
app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);
app.mount('#app');
