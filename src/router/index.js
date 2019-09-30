import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from 'router/module_routes'
import Slider from '@jeremyhamm/vue-slider'
import Vuetify from 'vuetify/lib'

// import LoginComponent from "components/modules/basic/Login.vue"
// import SecureComponent from "components/modules/basic/DashBoard.vue"

Vue.use(Slider)
Vue.use(Router)
Vue.use(ModuleRoutes)
Vue.use(Vuetify)

export default new Router({
    routes: ModuleRoutes. routes
})