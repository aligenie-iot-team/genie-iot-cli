<template>
  <div class="block">
    <span class="text">温州调节<b>(恒湿模式下目标湿度设置（%）)</b></span>
    <el-slider
    v-model="value"
    @change="change"
    :min="40"
    :max="80"
    :step="5"
    :format-numerial="formatNumerial"
    show-stops
    show-numerial
    >
    </el-slider>
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
        const { TargetHumidity } = attr
        return TargetHumidity
      },
      set: function (val) {
        this.$store.commit('updateDeviceAttrs', { TargetHumidity: val })
      }
    }
  },
  methods: {
    formatNumerial: function (item) {
      return item.value;
    },
    change: function (val) {
      this.$store.dispatch('setDeviceStatus', { attrs: { TargetHumidity: val, SprayLevel: 4 } })
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
