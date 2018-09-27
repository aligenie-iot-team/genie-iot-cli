<template>
  <div class="main">
    <div class="title">demo</div>
    <Radio />
    <Checkbox />
    <Message />
    <MessageBox />
    <SwitchItem />
    <Slider />
    <Progress />
    <Button />
  </div>
</template>

<script type="text/ecmascript-6">
import Radio from './components/radio.vue'
import Checkbox from './components/checkbox.vue'
import Slider from './components/slider.vue'
import SwitchItem from './components/switch.vue'
import Button from './components/button.vue'
import Progress from './components/progress.vue'
import Message from './components/message.vue'
import MessageBox from './components/messageBox.vue'

export default {
  name: 'Main',
  components: { Radio, Checkbox, Slider, SwitchItem, Button, Progress, Message, MessageBox }
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
</style>
