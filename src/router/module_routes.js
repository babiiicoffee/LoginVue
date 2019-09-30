import AUTH from 'services/auth'
// import { resolve } from 'dns'

let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path    
    next({
        // path:'/dashboard'
    })
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
        component: resolve => require(["../components/modules/basic/Login.vue"], resolve),
        beforeEnter: beforeEnter
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(["../components/modules/basic/Register.vue"], resolve),
        beforeEnter: beforeEnter
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(["../components/modules/basic/DashBoard.vue"], resolve),
        beforeEnter: beforeEnter
    },
]

routes = routes.concat(devRoutes)

export default {
    routes: routes
}