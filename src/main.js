import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './assets/all.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
