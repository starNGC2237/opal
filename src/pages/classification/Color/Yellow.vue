<!--
 * @Author: zhilutianji
 * @Date: 2022-01-07 21:13:40
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:46:02
 * @Description: file content
 * @FilePath: \opal\src\pages\classification\Color\Yellow.vue
-->
<template>
  <div class="yellow">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/classification' }"
      >分类
      </el-breadcrumb-item
      >
      <el-breadcrumb-item>黄色</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
    name: 'Yellow'
}
</script>

<style scoped>
.yellow {
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
