<template>
  <div class="wrap">
    <el-button type="text" @click="open">Message Box</el-button>
    <el-button type="text" @click="open2">打开confirm</el-button>
    <el-button type="text" @click="open3">打开prompt</el-button>
    <el-button type="text" @click="open4">html片段</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    open2 () {
      this.$confirm('这是confirm', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    },
    open3 () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    open4 () {
      this.$alert('<strong style="color: red;">这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).catch(() => {
        console.log('取消')
      })
    }
  }
}
</script>
<!--message样式可以写在全局；若写在组件内，不要加scoped -->
<style lang="scss" type="text/css">
.el-message-box {
  width: 80% !important;
}
</style>
<!-- 组件内的样式 -->
<style lang="scss" type="text/css" scoped>
.wrap {
  padding: 0 10px 20px;
  text-align: center;
}
</style>
