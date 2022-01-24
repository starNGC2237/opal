<!--
 * @Author: zhilutianji
 * @Date: 2022-01-07 20:44:18
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:04:06
 * @Description: file content
 * @FilePath: \opal\src\pages\index.vue
-->
<template>
  <div class="project">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
          slot="dateCell"
          slot-scope="{date,data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }}
            <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid architecto cumque eius error exercitationem facere fugit, inventore magnam non numquam officiis praesentium quae quibusdam vitae voluptates voluptatibus voluptatum.
          </span>
          </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
    name: 'Project'
}
</script>

<style scoped>
.project {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
    min-width: 1000px;
}
.is-selected {
  color: #1989FA;
}
</style>
