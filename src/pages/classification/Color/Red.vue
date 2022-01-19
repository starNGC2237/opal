<!--
 * @Author: zhilutianji
 * @Date: 2022-01-07 20:46:43
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:46:45
 * @Description: file content
 * @FilePath: \opal\src\pages\classification\Color\Red.vue
-->
<template>
  <div class="red">
    <div class="orange">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/classification' }"
        >分类</el-breadcrumb-item
      >
      <el-breadcrumb-item>红色</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container"></div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'Red'
}
</script>

<style scoped>
.red {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.container {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: brown;
}
</style>
