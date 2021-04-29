import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../antcomponents/Login'
import Homepage from '../antcomponents/Homepage'

const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/',
        name:'Homepage',
        component:Homepage
    }
]


Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})