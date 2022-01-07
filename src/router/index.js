/*
 * @Author: zhilutianji
 * @Date: 2021-12-28 21:07:59
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:00:08
 * @Description: file content
 * @FilePath: \opal\src\router\index.js
 */
import VueRouter from "vue-router";

import AboutOpal from '../pages/AboutOpal.vue';
import Statistics from '../pages/Statistics.vue'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'
import Classification from '../pages/classification'
import ClassificationBlue from '../pages/classification/Color/Blue.vue'
import ClassificationRed from '../pages/classification/Color/Red.vue'
import ClassificationYellow from '../pages/classification/Color/Yellow.vue'
import ClassificationOrange from '../pages/classification/Color/Orange.vue'

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
        },
        {
            path:'/project',
            component:Project
        },
        {
            path:'/classification',
            component:Classification
        },
        {
            path:'/classification/blue',
            component:ClassificationBlue
        },
        {
            path:'/classification/yellow',
            component:ClassificationYellow
        },
        {
            path:'/classification/red',
            component:ClassificationRed
        },
        {
            path:'/classification/orange',
            component:ClassificationOrange
        }

    ]
})



export default router