// import IconFontComponent from './components/IconFont'

// const IconFont = {
//   install(Vue) {
//     Vue.component('IconFont', IconFontComponent)
//   }
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.component('IconFont', IconFontComponent)
// }

// export default IconFont

// import Vue from 'vue'

// const IconFontComponent = Vue.extend(require('./components/IconFont').default)
// const IconFont = {
//   install: (vue) => {
//     let instance
//     if (!this.elm) {
//       this.elm = new IconFontComponent()
//       instance = this.elm.$mount()
//       document.body.appendChild(instance.$el)
//     }
//   }
// }

// export default IconFont

import Vue from 'vue'
import App from './App'
import IconFont from './components/IconFont'
// import IconFont from '../dist/vue-iconfonts.min'
import './assets/css/iconfont/iconfont.css'
import './assets/css/iconfont/iconfont'

Vue.component('IconFont', IconFont)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
