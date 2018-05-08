import Vue from 'vue';
import store from '~/store';
import router from '~/router';
import i18n from '~/plugins/i18n';
import App from '~/components/App';
import BootstrapVue from 'bootstrap-vue'
import VueBsDrawer from 'vue-bs-drawer'

import '~/plugins';
import '~/components';


Vue.component('bs-drawer', VueBsDrawer)
Vue.use(BootstrapVue);

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
});
