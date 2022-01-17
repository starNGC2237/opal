/*
 * @Author: zhilutianji
 * @Date: 2021-12-29 19:29:22
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-29 20:17:57
 * @Description: file content
 * @FilePath: \opal\src\store\index.js
 */
import Vue from 'vue'

import Vuex from 'vuex'
import signInRecords from "@/store/SignInRecords";

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        signInRecords
        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
    }

})