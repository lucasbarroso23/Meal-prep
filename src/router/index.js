import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue'),
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/Join.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
