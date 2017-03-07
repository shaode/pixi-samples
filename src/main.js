import 'babel-polyfill'
import Vue from 'vue'
import Root from 'pages/Root.vue'
import yun from 'yun-ui'
import 'yun-ui/dist/yun/index.css'

Vue.use(yun)

new Vue(Root).$mount('#app')
