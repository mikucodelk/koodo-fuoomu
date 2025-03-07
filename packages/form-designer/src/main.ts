import KfcFormDesigner from './form-designer.vue'
console.log(111)
const install = function (Vue) {
  Vue.component(KfcFormDesigner.name, KfcFormDesigner)
}
console.log(install, 111)

export default {
  install,
  KfcFormDesigner
}
