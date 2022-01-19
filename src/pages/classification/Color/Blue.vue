<!--
 * @Author: zhilutianji
 * @Date: 2022-01-07 20:46:29
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:19:00
 * @Description: file content
 * @FilePath: \opal\src\pages\classification\Color\Blue.vue
-->
<template>
  <div class="blue">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/classification' }">分类</el-breadcrumb-item>
      <el-breadcrumb-item>蓝色</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
    name: 'Blue'
}
</script>

<style scoped>
.blue {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.container{
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: brown;
}
</style>
