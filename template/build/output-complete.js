
const qrcode = require('qrcode-terminal');

function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

class OutputQrcode {
  constructor(opt) {
    this.url = opt.url || 'http://localhost:8080/'
  }
  apply(compiler) {
    const executeOpen = once(() => {
      setTimeout(() => {
        const qrcodeUrl = 'https://ju.taobao.com/m/jusp/alone/iot-bind-dev/mtp.htm#/list/';
        qrcode.generate(qrcodeUrl, { small: true });
        console.log('1. 打开天猫精灵app');
        console.log('2. 扫码获取用户身份信息AuthInfo');
        console.log(`3. 在浏览器控制台输入localStorage.setItem('__authInfo', {...});localStorage.setItem('__isDebug', 'true'); 或者在device-config中配置authInfo和isDebug`);
        console.log(`4. 在浏览器中访问你的程序: ${this.url}`);
      }, 500);
    })
    compiler.plugin('done', function (stats) {
      if (!stats.hasErrors()) {
        executeOpen()
      }
    });
  }
}

module.exports = OutputQrcode;