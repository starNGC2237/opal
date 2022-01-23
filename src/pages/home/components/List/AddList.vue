<template>
  <div class="add_list">
    <el-form :model="todo" label-position="left" class="form" :rules="rules">
      <el-form-item label="todo名称：" prop="name">
        <el-input v-model="todo.name"></el-input>
      </el-form-item>
      <el-form-item label="历经时间：">
        <el-date-picker
            v-model="todo.listTime"
            type="datetimerange"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            class="listTimeCss">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="备注内容：">
        <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="todo.note">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="commit()">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'AddList',
    data() {
        return {
            rules: {
                name: [
                    { required: true, message: '请输入todo名称', trigger: 'blur' },
                    { max: 20, message: '长度在 20 个字符以下', trigger: 'blur' }
                ]

            },
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            },
            todo: {
                name: '',
                listTime: [],
                note: ''
            }
        }
    },
    methods: {
        commit() {
            console.log(this.todo)
        }
    }
}
</script>

<style scoped>
.add_list {
  display: flex;
  padding: 1rem;
  justify-content: center;
    background-color: white;
}

.form {
  max-width: 100%;
}

.listTimeCss {
  max-width: 100%;
}
</style>
