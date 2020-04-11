// Import vue component
import IconFontComponent from "./IconFont.vue"

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component("IconFont", IconFontComponent)
}

// Create module definition for Vue.use()
const IconFontPlugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== "undefined" && window.Vue) {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined" && global.Vue) {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(IconFontPlugin)
}

// To allow use as module (npm/webpack/etc.) export IconFontComponent
export default IconFontComponent
