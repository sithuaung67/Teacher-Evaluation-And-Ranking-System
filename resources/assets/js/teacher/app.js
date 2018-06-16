import Vue from 'vue';
import store from '~/teacher/store';
import router from '~/teacher/router';
import i18n from '~/teacher/plugins/i18n';
import App from '~/teacher/components/App';
import BootstrapVue from 'bootstrap-vue'
import VueBsDrawer from 'vue-bs-drawer'

import '~/teacher/plugins';
import '~/teacher/components';


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
