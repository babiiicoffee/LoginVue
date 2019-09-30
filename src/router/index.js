import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from 'router/module_routes'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)
Vue.use(Router)

export default new Router({
    routes: ModuleRoutes.routes
})  

// import Vue from 'vue';
// import VeeValidate from 'vee-validate';

// import { store } from './_store';
// import { router } from './_helpers';
// import App from './app/App';

// Vue.use(VeeValidate);

// // setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

// new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(App)
// });