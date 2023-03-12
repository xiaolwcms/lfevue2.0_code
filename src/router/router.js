import Router from 'vue-router'
import Vue from 'vue'
import login from '../page/user/login.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: login
        }, {
            path: '/login',
            component: login
        }
    ],
    mode: 'history'
})