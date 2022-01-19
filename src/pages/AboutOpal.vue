<!--
 * @Author: zhilutianji
 * @Date: 2021-12-28 11:36:32
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 02:12:02
 * @Description: file content
 * @FilePath: \opal\src\pages\AboutOpal.vue
-->
<template>
  <div class="about">
    <h1>关于opal</h1>
    <p>Opal来自于欧珀的英语，源于拉丁文Opalus，意思是“集宝石之美于一身”。</p>
    <p>Opal是一个todo类型的软件，我的想法是把它做成一个帮助你确立短期目标的网站和软件。你可以使用Opal来确立自己的短期任务，Opal会将这些可视化为日历上的长条颜色，一看便能了解到今天要做什么。</p>
    <p>除此之外，你还可以使用Opal将大的任务细分为小的步骤或是将github的项目导入。统计会统计你的完成情况，快去刷完成率（不是</p>
    <p>Opal是一款开源软件，开源协议是GPL，所以说你可以自由的改造它（我不太会写vue，还请海涵</p>
    <p>开源地址：<a href="https://github.com/starNGC2237/opal">https://github.com/starNGC2237/opal</a></p>
    <p>隐私相关：Opal所有数据均储存在本地（就是除了更新或者访问网站上的Opal不需要联网.jpg</p>
    <p>应该没什么要写的了吧（</p>
    <p>哦哦，想起来了，技术栈是vue2 + vue-cli + element-ui + vue-router +echarts + normalize.css</p>
    <p>后面会升级vue3的，也会加vuex的（毕竟vuex舒服</p>
  </div>
</template>

<script>
export default {
    name: 'AboutOpal'
}
</script>

<style scoped>
.about {
  padding: 20px;
}
</style>
