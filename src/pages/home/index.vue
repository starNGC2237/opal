<!--
 * @Author: zhilutianji
 * @Date: 2021-12-29 17:16:37
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-11 10:07:38
 * @Description: file content
 * @FilePath: \opal\src\pages\index.vue
-->
<template>
  <div class="home">
    <el-row class="container">
      <el-col :xs="21" :sm="21" :md="21" :lg="14" :xl="14" class="list">
        <AddList></AddList>
      </el-col>
      <el-col class="hidden-md-and-down sidebar" :lg="6" :xl="6">
        <SignIn></SignIn>
        <AD></AD>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SignIn from "@/pages/home/components/sidebar/SignIn";
import AD from "@/pages/home/components/sidebar/AD"
import AddList from "@/pages/home/components/List/AddList";
export default {
  name: "Home",
  components:{
    SignIn,
    AD,
    AddList
  },
  data() {
    return {
    };
  },
  computed:{
  },
  methods:{
  },
  mounted() {
  },
};
</script>

<style scoped>
.home {
  display: flex;
  margin: 1rem;
}
.container{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.list{
  background-color: #409EFF;
}
.sidebar{
  display: flex;
  flex-direction: column;
}
.sidebar div:not(:last-child){
  margin-bottom: 2rem;
}

</style>