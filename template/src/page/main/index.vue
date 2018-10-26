<template>
  <div class="main">
    <div class="title">demo</div>
    <SwitchItem />
  </div>
</template>

<script type="text/ecmascript-6">
import SwitchItem from './components/switch.vue'

export default {
  name: 'Main',
  components: { SwitchItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
}
.main {
  padding-bottom: 60px;
}
.box {
  width: 90%;
  padding:0 5%;
}
</style>
