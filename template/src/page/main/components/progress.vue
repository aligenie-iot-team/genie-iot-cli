<template>
  <div class="progress">
    <div class="progress-warp">
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="80" color="#8e71c7"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <div class="progress-warp">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    </div>
    <div class="progress-warp progress-warp-center">
      <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.progress {
  text-align: left;
  .progress-warp {
    padding: 0 10px 20px;
  }
  .progress-warp-center {
    text-align: center;
  }
}
</style>
