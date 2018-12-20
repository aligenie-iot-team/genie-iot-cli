export default {
  base: {
    env: 'dev',
    pollingInterval: 5000,
    deviceInfo: {
      title: 'demo'
    }
  },
  debug: {
    params: {
      devId: '',
      productKey: '',
      skillId: ''
    },
    isDebug: true,
    authInfo: {},
  }
}
