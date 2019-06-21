import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faVk,
  faOdnoklassniki,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faPaintRoller,
  faBuilding,
  faWindowMaximize,
  faLeaf,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

library.add(
  faInstagram,
  faVk,
  faOdnoklassniki,
  faYoutube,
  faHome,
  faPaintRoller,
  faBuilding,
  faWindowMaximize,
  faLeaf,
  faEllipsisH
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

AOS.init();
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
