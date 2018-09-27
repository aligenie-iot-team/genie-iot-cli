<template>
  <div class="warp">
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <el-button :plain="true" @click="openHtml">html</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      this.$message({
        duration: 2000,
        showClose: true,
        message: '消息文字'
      })
    },
    openVn () {
      const h = this.$createElement
      this.$message({
        duration: 2000,
        showClose: true,
        type: 'error',
        message: h('p', null, [
          h('span', null, '类型：错误,内容是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      })
    },
    openHtml () {
      this.$message({
        duration: 2000,
        showClose: true,
        type: 'warning',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段,类型：告警</strong>'
      })
    }
  }
}
</script>
<!--message样式可以写在全局；若写在组件内，不要加scoped -->
<style lang="scss" type="text/css">
.el-message {
  min-width: 80% !important;
}
</style>
<!-- 组件内的样式 -->
<style lang="scss" type="text/css" scoped>
.warp {
  padding: 0 10px 20px;
  text-align: center;
}
</style>
