import KfcFormDesigner from './form-designer.vue'

const install = function (Vue) {
  Vue.component(KfcFormDesigner.name, KfcFormDesigner)
}

export default {
  install,
  KfcFormDesigner
}
