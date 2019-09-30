
// import LoginComponent from "components/modules/basic/Login.vue"
// import SecureComponent from "components/modules/basic/DashBoard.vue"


export default {
    routes: [
        // {

        //     path: '/',
        //     redirect: {
        //         name: "home"
        //     }
        // },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['components/modules/basic/Login.vue'], resolve),
            // component: LoginComponent,
            meta: {
                tokenRequired: false
            }, data() {
                return {
                    messageText: ''
                }
            },
            props: {
                userName: String,
            },
            methods: {
                sendMessage() {
                    this.$emit('messagesent', {
                        message: this.messageText,
                        user: {
                            name: this.userName
                        }
                    });
                    this.messageText = '';
                }
            }
        },

        {
            path: '/register',
            name: 'register',
            component: resolve => require(['components/modules/basic/Register.vue'], resolve),
            // component: SecureComponent,
            meta: {
                tokenRequired: false
            }
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: resolve => require(['components/modules/basic/DashBoard.vue'], resolve),
            meta: {
                tokenRequired: true
            }
        },

        {
            path: '/sidenav',
            name: 'sidenav',
            component: resolve => require(['components/frame/Sidebar.vue'], resolve),
        },


    ]
}