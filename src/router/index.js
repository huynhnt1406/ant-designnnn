import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../antcomponents/Login'
import UserManage from '../views/UserManage'
import Users from '../views/Users'
import UserDetail  from '../views/UserDetail'
const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/usermanage',
        name:'UserManage',
        component:UserManage
    },
    {
        path:'/users',
        name:'Users',
        component:Users
    },
    {
        path:'/users/userdetail/:id',
        name:'UserDetail',
        component:UserDetail,
        props:true
    }
]


Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})