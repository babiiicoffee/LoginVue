// import Vue from 'vue'
// import Router from 'vue-router'
// import ModuleRoutes from 'router/module_routes'
// Vue.use(Router)
// export default new Router({
//     routes: ModuleRoutes.routes
// })







// import config from 'config';

// Vue.use(Router)

// const router = new Router({history: true, root: config.root});

// router.map({
//     '/': {
//         name: 'home',
//         component: view('home')
//     },
//     '/user/:oid/': {
//         name: 'user',
//         component: view('user')
//     },
//     '/post/new/': {
//         name: 'new-post',
//         component: view('post-wizard')
//     },
//     '/post/:oid/': {
//         name: 'post',
//         component: view('post')
//     }
// });


// /**
//  * Asynchronously load view (Webpack Lazy loading compatible)
//  * @param  {string}   name     the filename (basename) of the view to load.
//  */
// function view(name) {
//     return function(resolve) {
//         require(['./views/' + name + '.vue'], resolve);
//     }
// };

// // export default router;