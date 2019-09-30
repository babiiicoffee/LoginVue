import AUTH from 'services/auth'
// import { resolve } from 'dns'

let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path   
    next()
    // if (to.tokenRequire == true){
    //     token = Session.getToken('tokenRequire');
    //     if(token!=null){
    //         next()
    //     }
    // }else{
    //     next({
    //         path: '/login'
    //     })
    // }
}


let app = require('router/app.js')
var devRoutes = []
devRoutes = devRoutes.concat(app.default.routes)
for (let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}

let routes = [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(["components/modules/basic/Login.vue"], resolve),
        beforeEnter: beforeEnter
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(["components/modules/basic/Register.vue"], resolve),
        beforeEnter: beforeEnter
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(["components/modules/basic/DashBoard.vue"], resolve),
        beforeEnter: beforeEnter
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(["components/modules/basic/Home.vue"], resolve),
        beforeEnter: beforeEnter
    },
]

routes = routes.concat(devRoutes)

export default {
    routes: routes
}

import Vue from 'vue'
import Router from 'vue-router'
import { Session } from 'inspector';

Vue.use(Router)
