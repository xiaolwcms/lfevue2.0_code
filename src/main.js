import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Router from './router/router'
import './plugins/element'


Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
