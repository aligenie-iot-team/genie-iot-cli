<template>
  <div id="appview">
    <iot-header :data='navBarData'></iot-header>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { IotHeader } from 'genie-ui';

export default {
  name: 'App',
  components: {
    IotHeader
  },
  created: function () {
    this.$store.dispatch('deviceStatusPolling')
  },
  computed: {
    ...mapState({
      navBarData: state => state.base.navBarData
    })
  },
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
