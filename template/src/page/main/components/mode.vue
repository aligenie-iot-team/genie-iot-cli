<template>
  <div class="block">
    <span class="text">模式</span>
    <el-radio-group v-model="value" @change="change" type="grid">
      <el-radio-button :label="1">雾量1档</el-radio-button>
      <el-radio-button :label="2">雾量2档</el-radio-button>
      <el-radio-button :label="3">雾量3档</el-radio-button>
      <el-radio-button :label="4">恒湿模式</el-radio-button>
      <el-radio-button :label="0">睡眠模式</el-radio-button>
    </el-radio-group>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {}
  },
  computed: {
    value: {
      get: function () {
        const { attr } = this.$store.state
        const { SprayLevel } = attr
        return SprayLevel
      },
      set: function (val) {
        this.$store.commit('updateDeviceAttr', { SprayLevel: val })
      }
    }
  },
  methods: {
    change: function (val) {
      this.$store.dispatch('setDeviceStatus', { SprayLevel: val })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.text {
  display: block;
  padding-top: 40px;
  b {
    font-weight: normal;
    font-size: 12px;
  }
}
</style>
