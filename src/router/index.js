import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/403',
            name: '403',
           // component: AccessDenied
        },
        {
            path: '*',
            name: '404',
           // component: PageNotFound
        }
    ]
})
