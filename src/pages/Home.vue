<!--
 * @Author: zhilutianji
 * @Date: 2021-12-29 17:16:37
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 02:12:29
 * @Description: file content
 * @FilePath: \opal\src\pages\Home.vue
-->
<template>
  <div class="home">
    <div class="works" ref="works"></div>
    <div class="works" ref="works2"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
  display: block;
  box-sizing: border-box;
}
.works {
  width: 100%;
  height: 100%;
}
</style>