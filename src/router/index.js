import Vue from 'vue'
import Router from 'vue-router'
// import Root from 'pages/Root.vue'
// import Help from 'pages/Help.vue'
// unknown reason with above syntax:"export 'Help' was not found in 'pages'
// import {
//     Help
// } from 'pages'
import Pages from 'pages'

Vue.use(Router)

const router = new Router({
    component: Pages.Root,
    routes: [
        {
            path: '/pixi',
            name: 'Pixi',
            component: Pages.Pixi
        }
    ],
    mode: 'history'
})

export default router
