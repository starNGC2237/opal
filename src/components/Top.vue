<!--
 * @Author: zhilutianji
 * @Date: 2021-12-23 15:03:32
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-29 19:37:33
 * @Description: file content
 * @FilePath: \opal\src\components\Top.vue
-->
<template>
  <div class="top">
    <i :class="i"  @click="offOrOn()"></i>
    <div class="logo">
      <span>Opal</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      i: "el-icon-s-operation",
    };
  },
  methods: {
    offOrOn() {
      this.$bus.$emit("changeLeftBarIsCollapse")
    },
  },
};
</script>

<style scoped>
.top{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  color:#fff;
}

.logo>span{
  font-size: 1.2rem;
}
i {
  font-size: 26px;
  text-align: center;
  cursor: pointer;
  color: #fff;
}
@media screen and (max-width: 960px) {
  i{
    pointer-events: none;
  }
}
</style>