<template>
  <div class="main">
    <div class="title">demo</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Main',
  components: {},
  computed: {
    title() {
      const { deviceInfo } = this.$store.state.base
      const { title } = deviceInfo
      return title
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      Components.topbar.setNavbar({ center: { text: vm.title } })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 0 20px;
}
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
  padding: 0 5%;
}
.radio-group {
  padding-top: 20px;
}
</style>
