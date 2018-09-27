<template>
  <div class="radio">
    <div class="radio-warp">
    <el-radio-group v-model="radio1" @change="radio1change">
      <el-radio-button v-for="item in radioItems" :label="item.id" :key="item.id">\{{item.name}}</el-radio-button>
    </el-radio-group>
    </div>
    <div class="radio-warp">
      <el-radio v-model="radio2" label="1" border @change="radio2Chang">单选1</el-radio>
      <el-radio v-model="radio2" label="2" border @change="radio2Chang">单选2</el-radio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      radio1: 1,
      radio2: '1',
      radioItems: [
        { name: '单选a', id: 0 },
        { name: '单选b', id: 1 },
        { name: '单选c', id: 2 },
        { name: '单选d', id: 3 }
      ]
    }
  },
  methods: {
    radio1change: function (label) {
      const items = this.$data.radioItems
      const curItem = items[label]
      console.log(curItem, label, curItem.name)
    },
    radio2Chang: function (label) {
      console.log(label)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.radio {
  text-align: center;
  .radio-warp {
    padding: 0 10px 20px;
  }
}
</style>
