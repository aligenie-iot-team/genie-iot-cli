/**
 * 设备配置项
 */
export default {
  base: {
    env: 'dev',
    platform: 'genie',
    icon: [],
    pollingInterval: 5000,
    deviceInfo: {
      title: '设备名称'
    }
  },
  debug: {
    params: {
      productKey: '',
      devId: ''
    },
    stagingMap: 'pre2', // pre2 预发环境  'release' 为线上环境
  }
}
