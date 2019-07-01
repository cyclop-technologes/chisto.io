import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Kvartiry from './views/Kvartiry.vue';
import Repair from './views/Repair.vue';
import Okna from './views/Okna.vue';
import Khimchistka from './views/Khimchistka.vue';
import Faq from './views/Faq.vue';
import Jobs from './views/Jobs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/kvartiry',
      name: 'kvartiry',
      component: Kvartiry,
    },
    {
      path: '/repair',
      name: 'repair',
      component: Repair,
    },
    {
      path: '/okna',
      name: 'okna',
      component: Okna,
    },
    {
      path: '/khimchistka',
      name: 'khimchistka',
      component: Khimchistka,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});
