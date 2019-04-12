<template>
  <div class="main">
    <!-- 设备信息 -->
    <div class="deviceInfo">
      <img :src="productInfo.img">
      <h5 class="title">{{\productInfo.title}}</h5>
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
      img: 'https://img.alicdn.com/tfs/TB1B3GmJkvoK1RjSZPfXXXPKFXa-104-104.png',
      title: '设备名称'
    };
  },
  computed: {
    ...mapState({
      // 产品信息详情
      productInfo: state => {
        return state.base.productInfo;
      },

      // 设备status
      deviceStatus(state) {
        const attr = state.publicInfo.attr;
        const onlinestate = attr.onlinestate === 'online' ? '在线' : '离线';
        const ultravioletOnOff = attr.ultravioletOnOff === 1;
        return [{
          text: '设备状态',
          descColor: '#4a4a4a',
          desc: onlinestate
        }, {
          check: ultravioletOnOff,
          text: '开关状态',
          type: 'switch',
          clickBack: (val) => {
            this.$store.dispatch('setDeviceStatus', {
              ultravioletOnOff: val.check ? 0 : 1
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
    });
  },
  beforeDestroy() {
    AI.allListenRemove(); // 页面兼听事件取消
  },
  methods: {
    // 设置topbar
    setNavbar() {
      AI.setNavbar({
        title: this.productInfo.title,
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
