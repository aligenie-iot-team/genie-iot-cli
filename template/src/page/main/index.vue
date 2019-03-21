<template>
  <div class="main">
    <!-- 设备信息 -->
    <div class="deviceInfo">
      <img :src="img">
      <h5 class="title">\{{title}}</h5>
    </div>

    <!-- 设备状态 -->
    <push-bar
      v-for="(val, key) in deviceStatus" v-bind:key="key"
      :data="val" :type="val.type"
      :check="val.check"
    >
    </push-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
import { PushBar } from 'genie-ui';

export default {
  name: 'Main',
  components: {
    PushBar
  },
  data() {
    return {
      title: '设备名称',
      img: 'https://img.alicdn.com/tfs/TB1B3GmJkvoK1RjSZPfXXXPKFXa-104-104.png'
    };
  },
  computed: {
    ...mapState({
      // 设备status
      deviceStatus(state) {
        const attr = state.publicInfo.attr;
        const onlinestate = attr.onlinestate === 'online' ? '在线' : '离线';
        const powerstate = attr.powerstate === 1;
        return [{
          text: '设备状态',
          descColor: '#4a4a4a',
          desc: onlinestate
        }, {
          check: powerstate,
          text: '开关状态',
          type: 'switch',
          clickBack: (val) => {
            this.$store.dispatch('setDeviceStatus', {
              powerstate: val.check ? 0 : 1
            });
          }
        }]
      },

      // 在线状态
      onlinestate: state => {
        const onlinestate = state.publicInfo.attr.onlinestate;
        return onlinestate === 'online' ? '在线' : '离线';
      },

      // 开关状态
      powerstate: state => {
        const powerstate = state.publicInfo.attr.powerstate;
        return powerstate === 1;
      },
    }),
  },
  created() {
    console.log('this.$route.query：', this.$route.query);
    this.$nextTick(() => {
      this.setNavbar(); // 设置topbar

      // 兼听页面改变
      AI.listenPageChange({
        Background: () => { }, // 页面离开
        Active: () => { }, // 页面显示
      });
    });
  },
  beforeDestroy() {
    AI.allListenRemove(); // 页面兼听事件取消
  },
  methods: {
    // 设置topbar
    setNavbar() {
      AI.setNavbar({
        title: this.title, // device-config 配置的 deviceInfo.title  也可以手动设置
      })
    },
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
</style>
