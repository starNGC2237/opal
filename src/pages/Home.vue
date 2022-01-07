<!--
 * @Author: zhilutianji
 * @Date: 2021-12-29 17:16:37
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 14:20:48
 * @Description: file content
 * @FilePath: \opal\src\pages\Home.vue
-->
<template>
  <div class="home">
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      option: {
        title: {
          text: "每周项目图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.02],
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
        },
        series: [
          {
            name: "2012",
            type: "bar",
            data: [1,7,3,2,4,5],
          },
        ],
      },
    };
  },
  computed:{
    // 基于准备好的dom，初始化echarts实例
    myChart: function () {
      return this.$echarts.init(this.$refs.main);
    },
  },
  methods:{
    myEcharts() {
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: aqua;
}
#main{
    width: 500px;
  height: 500px;
  margin-top: 20px;
  background-color: yellow;
}
</style>