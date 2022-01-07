<!--
 * @Author: zhilutianji
 * @Date: 2021-12-19 18:32:18
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:52:39
 * @Description: file content
 * @FilePath: \opal\src\components\LeftBar.vue
-->
<template>
  <el-menu
    default-active="currentMenu"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
  >
    <el-menu-item index="/home">
      <i class="el-icon-house"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/project">
      <i class="el-icon-menu"></i>
      <span slot="title">项目</span>
    </el-menu-item>
    <el-menu-item index="/statistics">
      <i class="el-icon-pie-chart"></i>
      <span slot="title">统计</span>
    </el-menu-item>
    <el-submenu index="/classification">
      <template slot="title">
        <i class="el-icon-collection"></i>
        <span slot="title">分类</span>
      </template>
      <el-menu-item index="/classification/blue">蓝色</el-menu-item>
      <el-menu-item index="/classification/yellow">黄色</el-menu-item>
      <el-menu-item index="/classification/orange">橙色</el-menu-item>
      <el-menu-item index="/classification/red">红色</el-menu-item>
      
    </el-submenu>

    <el-menu-item index="/about">
      <i class="el-icon-ice-drink"></i>
      <span slot="title">关于</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "LeftBar",
  data() {
    return {
      opalOptions: JSON.parse(window.localStorage.getItem("opalOptions")) || [],
    };
  },
  computed: {
    isCollapse() {
      return this.opalOptions[0].isCollapse;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    if (window.localStorage.getItem("opalOptions") == null) {
      this.opalOptions.push({ name: "option", isCollapse: true });
    }
    this.$bus.$on("changeLeftBarIsCollapse", () => {
      this.opalOptions.forEach((obj) => {
        if (obj.name === "option") obj.isCollapse = !obj.isCollapse;
      });
    });
  },
  watch: {
    //监听路由变化，并给currentMenu
    $route(e) {
      this.currentMenu = e.path; // e里面的是当前路由的信息
    },
    opalOptions: {
      deep: true,
      handler(value) {
        window.localStorage.setItem("opalOptions", JSON.stringify(value));
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  box-sizing: border-box;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo > div {
  height: 60px;
  width: 200px;
  background-color: blue;
}
</style>
