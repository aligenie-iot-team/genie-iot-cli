/**
 * 设备配置项
 */
export default {
  base: {
    env: 'dev',
    platform: 'genie',
    icon: ['//at.alicdn.com/t/font_358977_9akbhb29n8k.js'],
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
