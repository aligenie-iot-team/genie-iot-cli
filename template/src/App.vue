<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.$store.dispatch('deviceStatusPolling')
  }
}
</script>

<style lang="less" >
@import './assets/less/style.less';
@import 'genie-ui/build/tunas.css';
html,
body {
  margin: 0;
  height: 100%;
}
</style>
