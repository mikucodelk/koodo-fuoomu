<script setup lang="ts">
import { ref } from 'vue'
import { KfcForm, KfcRow, KfcCol } from '@koodo-fuoomu/element-plus'
const components = ref([
  {
    title: '布局组件',
    list: [
      {
        name: '栅格',
        component: KfcRow,
        children: [
          { name: '栅格项', component: KfcCol, dragger: true },
          { name: '栅格项', component: KfcCol, dragger: true }
        ]
      }
    ]
  },
  {
    title: '基本组件',
    list: [{ name: '输入框', component: 'el-input' }]
  }
])
</script>

<template>
  <div class="h-100vh">
    <kfc-form-designer
      root-name="表单"
      :root-component="KfcForm"
      :components="components"
    >
    </kfc-form-designer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
