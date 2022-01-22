<!--
 * @Author: zhilutianji
 * @Date: 2022-01-07 02:21:19
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 02:26:29
 * @Description: file content
 * @FilePath: \opal\src\App.vue
-->

<template>
  <div id="app">
    <el-container class="app_container">
      <el-aside width="fit-content">
        <LeftBar/>
      </el-aside>
      <el-container>
        <el-header>
          <Top/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftBar from './components/LeftBar.vue'
import Top from './components/Top.vue'

export default {
    name: 'App',
    components: {
        LeftBar,
        Top
    }
}
</script>

<style>
.app_container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #409EFF;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  padding-top: 60px;
  line-height: 200px;
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
}
.el-calendar-table .el-calendar-day{
  height: fit-content;
}
</style>
