/*
 * @Author: zhilutianji
 * @Date: 2022-01-07 02:21:19
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 02:24:52
 * @Description: file content
 * @FilePath: \opal\src\main.js
 */
import Vue from 'vue'
//导入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
//使用css重置
import 'normalize.css/normalize.css'
//导入vue-router
import VueRouter from 'vue-router'
import router from './router/index'
//导入echarts
import * as echarts from 'echarts'
//导入vuex
import store from './store'
//导入dayjs
import dayjs from "dayjs"
// 媒体查询
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false
//使用插件
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router:router,
  store:store,
  beforeCreate(){
    Vue.prototype.$bus = this,
    Vue.prototype.$echarts = echarts
    Vue.prototype.$dayjs = dayjs;
  }
}).$mount('#app')
