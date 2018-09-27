<template>
  <div class="switch">
    <div class="switch-warp">
      <div class="switch-box">
        <div class="switch-title">开关</div>
        <el-switch v-model="value1" @change="switchChange"></el-switch>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      value1: true
    }
  },
  methods: {
    switchChange (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.switch {
  text-align: center;
  .switch-warp {
    padding: 0 0 20px;
    .switch-title {
      color: #606266;
      font-size: 14px;
    }
    .switch-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 35px;
      padding: 0 10px;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>
