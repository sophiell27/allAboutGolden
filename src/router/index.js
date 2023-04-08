import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/front/ProductsDisplayView.vue'),
          },
          {
            path: 'category/:category',
            component: () => import('../views/front/ProductsDisplayView.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
