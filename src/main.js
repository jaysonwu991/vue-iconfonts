import IconFont from './components/IconFont.vue'

const install = {
  installed: false,
  install(Vue, option = {}) {
    if (this.installed) return
    this.installed = true
    Vue.component('IconFont', IconFont)
  }
}

IconFont.install = install.install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('IconFont', IconFont)
}

export default IconFont

// import Vue from 'vue'
// import App from './App'
// import IconFont from './components/IconFont'
// import './assets/css/iconfont/iconfont.css'
// import './assets/css/iconfont/iconfont'

// Vue.component('IconFont', IconFont)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: {App}
// })
