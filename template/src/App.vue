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
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
}
</style>
