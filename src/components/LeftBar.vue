<!--
 * @Author: zhilutianji
 * @Date: 2021-12-19 18:32:18
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-11 10:03:19
 * @Description: file content
 * @FilePath: \opal\src\components\LeftBar.vue
-->
<template>
  <el-menu
    default-active="currentMenu"
    class="el-menu-vertical-demo"
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
    <el-submenu index="/classification" @click.native="toClassification()">
      <template slot="title" >
        <i class="el-icon-collection"></i>
        <span slot="title">分类</span>
      </template>
      <el-menu-item index="/classification/blue" @click.native.stop="toClassificationBlue()"
        >蓝色</el-menu-item
      >
      <el-menu-item index="/classification/yellow" @click.native.stop="toClassificationYellow()">黄色</el-menu-item>
      <el-menu-item index="/classification/orange" @click.native.stop="toClassificationOrange()">橙色</el-menu-item>
      <el-menu-item index="/classification/red" @click.native.stop="toClassificationRed()">红色</el-menu-item>
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
      isCollapse:true,
      screenWidth: null
    };
  },
  methods: {
    toClassification(){
      this.$router.push('/classification',()=>{},()=>{})
    },
    toClassificationBlue(){
      this.$router.push('/classification/blue',()=>{},()=>{})
    },
    toClassificationYellow(){
      this.$router.push('/classification/yellow',()=>{},()=>{})
    },
    toClassificationOrange(){
      this.$router.push('/classification/orange',()=>{},()=>{})
    },
    toClassificationRed(){
      this.$router.push('/classification/red',()=>{},()=>{})
    },
  },
  // 应该在created进行ajax或初始化数据
  created() {
  },
  // 在mounted里进行挂载操作
  mounted() {
    this.$bus.$on("changeLeftBarIsCollapse", () => {
        this.isCollapse = !this.isCollapse;
    });

    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        if (val!==null && val < 1060) {
            if (!this.isCollapse) this.isCollapse = !this.isCollapse;
        }
      },
      immediate: true
    }
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
