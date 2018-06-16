import Vue from 'vue';
import store from '~/admin/store';
import router from '~/admin/router';
import i18n from '~/admin/plugins/i18n';
import App from '~/admin/components/App';
import BootstrapVue from 'bootstrap-vue'
import VueBsDrawer from 'vue-bs-drawer'

import '~/admin/plugins';
import '~/admin/components';


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
