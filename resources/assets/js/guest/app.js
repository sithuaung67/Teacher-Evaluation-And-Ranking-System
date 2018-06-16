import Vue from 'vue';
import store from '~/guest/store';
import router from '~/guest/router';
import i18n from '~/guest/plugins/i18n';
import App from '~/guest/components/App';
import BootstrapVue from 'bootstrap-vue'
import VueBsDrawer from 'vue-bs-drawer'

import '~/guest/plugins';
import '~/guest/components';


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
