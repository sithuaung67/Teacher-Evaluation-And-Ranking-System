import Vue from 'vue';
import store from '~/student/store';
import router from '~/student/router';
import i18n from '~/student/plugins/i18n';
import App from '~/student/components/App';
import BootstrapVue from 'bootstrap-vue'
import VueBsDrawer from 'vue-bs-drawer'

import '~/student/plugins';
import '~/student/components';


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
