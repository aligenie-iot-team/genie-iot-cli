<template>
  <div class="checkbox">
    <div class="checkbox-warp">
      <el-checkbox v-model="checkbox" :label="1" border @change="checkbox2Chang">复选1</el-checkbox>
      <el-checkbox v-model="checkbox" :label="2" border @change="checkbox2Chang">复选2</el-checkbox>
      <el-checkbox v-model="checkbox" :label="3" border @change="checkbox2Chang">复选3</el-checkbox>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      checkbox: [1]
    }
  },
  methods: {
    checkbox2Chang: function (label, e) {
      console.log(label, this.$data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.checkbox {
  text-align: center;
  .checkbox-warp {
    padding: 0 10px 20px;
  }
}
</style>
