<!--
 * @Author: zhilutianji
 * @Date: 2021-12-29 16:13:08
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-07 22:06:54
 * @Description: file content
 * @FilePath: \opal\src\pages\Statistics.vue
-->
<template>
  <div class="echarts">
    <div id="main" ref="main"></div>
    <div id="main2" ref="main2"></div>
    <div id="main3" ref="main3"></div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      // 指定图表的配置项和数据
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
          bottom: 0,
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  computed: {
    // 基于准备好的dom，初始化echarts实例
    myChart: function () {
      return this.$echarts.init(this.$refs.main);
    },
    myChart2: function () {
      return this.$echarts.init(this.$refs.main2);
    },
    myChart3: function () {
      return this.$echarts.init(this.$refs.main3);
    },
  },
  methods: {
    myEcharts() {
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
      this.myChart2.setOption(this.option);
      this.myChart3.setOption(this.option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
.echarts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
}
#main,
#main2,
#main3 {
  width: 500px;
  height: 500px;
  margin-top: 20px;
  background-color: aqua;

}
</style>