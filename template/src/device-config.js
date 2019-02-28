/**
 * 设备配置项
 */
export default {
  base: {
    // env: 'dev',
    platform: 'genie',
    icon: [],
    pollingInterval: 3000,
    deviceInfo: {
      title: '设备名称2'
    }
  },
  debug: {
    params: {
      productKey: '',
      devId: ''
    },
    stagingMap: 'release', // pre2 预发环境  'release' 为线上环境
  }
}
