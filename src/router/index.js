/*
 * @Author: zhilutianji
 * @Date: 2021-12-28 21:07:59
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-29 17:18:54
 * @Description: file content
 * @FilePath: \opal\src\router\index.js
 */
import VueRouter from "vue-router";

import AboutOpal from '../pages/AboutOpal.vue';
import Statistics from '../pages/Statistics.vue'
import Home from '../pages/Home.vue'


const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutOpal,
        },
        {
            path:'/statistics',
            component:Statistics
        },
        {
            path:'/home',
            component:Home
        }
    ]
})



export default router