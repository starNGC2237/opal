<template>
  <div class="signin">
    <div class="daily">
      <div class="text">
        <i :class="this.drink"></i>
        <span class="time">{{ timeThere }}</span>
      </div>
      <el-button type="primary" round size="small" :disabled="isSignIn" @click="signInCommit">
        {{ isSignIn ? '已签到' : '签到' }}
      </el-button>
    </div>
    <div class="days">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur deleniti deserunt eius eos est eveniet
      fugiat fugit id illo obcaecati ratione repudiandae saepe sunt temporibus veritatis, voluptatem. Dolorem, placeat.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    name: 'SignIn',
    data() {
        return {
            timeThere: ''
        }
    },
    computed: {
        ...mapState('signInRecords', ['signInRecords']),
        ...mapGetters('signInRecords', ['isSignIn'])
    },
    created() {
        const timeHour = this.$dayjs()
        if (timeHour.hour() < 12) {
            this.timeThere = '上午好！'
            this.drink = 'el-icon-hot-water'
        } else if (timeHour.hour() < 18) {
            this.timeThere = '下午好！'
            this.drink = 'el-icon-ice-drink'
        } else {
            this.timeThere = '晚上好！'
            this.drink = 'el-icon-coffee'
        }
    },
    methods: {
        signInCommit() {
            this.signin()
            this.$message({
                message: '签到成功！',
                type: 'success'
            })
        },
        ...mapActions('signInRecords', ['signin'])
    }
}
</script>

<style scoped>
.signin {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: white;
}

.daily {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: #303133;
}

.daily > .text {
  font-size: larger;
}

.daily > .text > .time {
  margin-left: 10px;
}

.days {
  color: #909399;
  padding: 0 1rem 1rem;
}
</style>
