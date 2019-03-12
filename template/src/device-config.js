export default {
  base: {
    env: 'dev',
    platform: 'genie',
    icon: [],
    pollingInterval: 3000,
    deviceInfo: {}
  },
  debug: {
    stagingMap: 'release',
    params: {
      productKey: '',
      devId: ''
    }
  }
}