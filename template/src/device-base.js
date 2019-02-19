import VConsole from 'vconsole'
import deviceConfig from './device-config'
import loaderjs from 'loaderjs'

const uiIcon = '//at.alicdn.com/t/font_703201_pjupl8lzjld.js' // 公用的icon
loaderjs.load([...deviceConfig.base.icon, uiIcon]); // 注入其他icon

if (deviceConfig.base.env === 'dev') {
  /* eslint-disable no-new */
  new VConsole()
}
