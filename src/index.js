import Swatch from '../packages/swatch'

const components = [
  Swatch
]

const install = Vue => {
  if (install.done) return false

  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
