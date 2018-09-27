<template>
  <div class="block">
    <div class="button-warp">
      <el-button type="primary" @click="backMain">上一页</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    backMain () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.block {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  background-color: #fff;
  z-index: 10;
  .button-warp {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
  }
}
</style>
