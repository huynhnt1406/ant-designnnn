import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(Antd);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
