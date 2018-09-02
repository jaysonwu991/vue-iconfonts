import IconFont from './components/IconFont.vue'

const installed = false

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
