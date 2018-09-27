<template>
  <div class="slider">
    <div class="slider-warp">
      <el-slider v-model="value1" @change="sliderChange" :format-tooltip="formatTooltip" :min="32" :max="70"></el-slider>
    </div>
    <div class="slider-warp">
      <el-slider v-model="value2" @change="pipSliderChange" :min="20" :max="30" show-stops></el-slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      value1: 50,
      value2: 21
    }
  },
  methods: {
    formatTooltip (val) {
      return val + '℃'
    },
    sliderChange (val) {
      console.log(val)
    },
    pipSliderChange (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.slider {
  text-align: center;
  .slider-warp {
    padding: 0 10px 20px;
  }
}
</style>
