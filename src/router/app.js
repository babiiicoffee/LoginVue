
export default {
    routes: [
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['../components/modules/basic/Login.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },

        {
            path: '/register',
            name: 'register',
            component: resolve => require(['../components/modules/basic/Register.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: resolve => require(['../components/modules/basic/DashBoard.vue'], resolve),
            meta: {
                tokenRequired: true
            }
        },

        {
            path: '/sidenav',
            name: 'sidenav',
            component: resolve => require(['../components/frame/Sidebar.vue'], resolve),
        }
    ]
}