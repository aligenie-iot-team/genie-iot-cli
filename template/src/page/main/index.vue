<template>
  <div class="main">
    <div class="deviceInfo">
      <img :src="img">
      <h5 class="title">\{{title}}</h5>
    </div>

    <div class="switch" @click="control">
      <h5>设备状态</h5>
      <span>\{{onlinestate}}</span>
    </div>
    <div class="switch" @click="control">
      <h5>开关状态</h5>
      <switch-button :value="powerstate"></switch-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
import { SwitchButton } from 'genie-ui';

export default {
  name: 'Main',
  components: {
    SwitchButton
  },
  data() {
    return {
      img: 'http://img.alicdn.com/tfs/TB1ctXOBbvpK1RjSZPiXXbmwXXa-800-800.jpg'
    };
  },
  computed: {
    ...mapState({
      // 设备status
      deviceStatus: state => {
        return state.publicInfo.attr;
      },

      title: state => {
        return state.base.deviceInfo.title;
      },

      // 在线状态
      onlinestate: state => {
        const onlinestate = state.publicInfo.attr.onlinestate;
        return onlinestate === 'online' ? '在线' : '离线';
      },

      // 开关状态
      powerstate: state => {
        const powerstate = state.publicInfo.attr.powerstate;
        return powerstate === 'on';
      }
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      AI.setNavbar({
        title: vm.title, // device-config 配置的 deviceInfo.title  也可以手动设置
        // right: [{
        //   type: 'image',
        //   eventFunc: () => {
        //     alert('you clicked on me !')
        //   },
        //   content: 'https://img.alicdn.com/tfs/TB1yOtHB9zqK1RjSZFLXXcn2XXa-40-40.png'
        // }, {
        //   type: 'text',
        //   eventFunc: () => {
        //     alert('you clicked on me !')
        //   },
        //   content: '好的'
        // }]
      })
    });
  },
  created() {
    console.log('this.$route.query：', this.$route.query);
    this.$nextTick(() => {
      // 兼听页面改变
      AI.listenPageChange({
        Background: () => { }, // 页面离开
        Active: () => { }, // 页面显示
      });
    });
  },
  beforeDestroy() {
    AI.allListenRemove(); // 页面兼听事件取消

    document.removeEventListener('tapRightItem', this.tapRightItem);
  },
  methods: {

    tapRightItem() {
      // 前往设置页面
      AI.goWeexSetPage({
        pre: '2'
      });
    },

    control() {
      if (this.onlinestate !== '在线') {
        return;
      }
      this.$store.dispatch('setDeviceStatus', {
        powerstate: this.powerstate ? 'off' : 'on'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.deviceInfo {
  display: flex;
  height: 180px;
  margin-bottom: 10px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 80px;
  }
  .title {
    color: #4a4a4a;
    font-weight: bold;
    padding-top: 5px;
  }
}

.switch {
  display: flex;
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 0 5px #eee;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  h5 {
    color: #4a4a4a;
    font-size: 14px;
  }
}
</style>
