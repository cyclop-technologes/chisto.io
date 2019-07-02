import Vue from 'vue';
import AOS from 'aos';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMask from 'v-mask';
import 'aos/dist/aos.css';
import 'animate.css/animate.css'
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
  faEllipsisH,
  faTimes,
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
  faEllipsisH,
  faTimes,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

AOS.init();
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
