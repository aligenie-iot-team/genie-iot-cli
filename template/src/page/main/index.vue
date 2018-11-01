<template>
  <div class="main">
    <div class="title">demo</div>
    <SwitchItem />
		<Mode v-if="PowerSwitch === 1" />
    <Temperature v-show="SprayLevel === 4 && PowerSwitch === 1" />
  </div>
</template>

<script type="text/ecmascript-6">
import SwitchItem from './components/switch.vue'
import Temperature from './components/temperature.vue'
import Mode from './components/mode.vue'

export default {
	name: 'Main',
	components: { SwitchItem, Temperature, Mode },
	computed: {
		PowerSwitch: function () {
			const { attr } = this.$store.state
			const { PowerSwitch } = attr
			return PowerSwitch;
		},
		SprayLevel: function () {
			const { attr } = this.$store.state
			const { SprayLevel } = attr
			return SprayLevel
		}
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
