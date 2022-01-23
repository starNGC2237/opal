<template>
  <div class="sign_in_record_list">
      <p v-for="item in signInRecords1" :key="item.time">签到时间：{{item.time}}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'signInRecordList',
    created() {
        this.signInRecords1 = _.cloneDeep(this.$store.state.signInRecords.signInRecords)
        this.signInRecords1.forEach((obj) => {
            obj.time = this.$dayjs(obj.time).format('YYYY-MM-DD HH:mm:ss')
        })
    }
}
</script>

<style scoped>
.sign_in_record_list{
    background-color: white;
    padding:1rem;
}
</style>
