<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { Icon } from '@iconify/vue'
import { defineProps, ref, provide, nextTick } from 'vue'
import formDesignerWrap from './components/form-designer-wrap/form-designer-wrap.vue'
import type { Component } from 'vue'
defineOptions({
  name: 'KfcFormDesigner'
})
defineProps<{
  rootComponent: Component
}>()

const activeMenu = ref('component')

const menus = new Map([['component', 'component']])

const components = ref([
  {
    title: '基本组件',
    components: [
      { label: '文本框', value: 'span' },
      { label: '主要内容', value: 'strong' }
    ]
  },
  {
    title: '表单组件',
    components: [
      { label: '输入框', value: 'el-input' },
      { label: '多行文本', value: 'textarea' }
    ]
  }
])
const onClone = res => {
  return {
    name: res.label,
    component: res.value,
    children: []
  }
}
const designerList = ref([])
const activeId = ref('')
const updateActiveId = id => {
  activeId.value = id
}
provide('activeId', { activeId, updateActiveId })
nextTick(() => {
  activeId.value = ''
})
</script>

<template>
  <article class="box-border h-full flex flex-col bg-#edeff3">
    <header class="box-border flex-none h-52px bg-white mb-2px px-16px py-8px flex justify-between items-center">
      <h1 class="box-border text-24px">KOODO FUOOMU</h1>
      <section>
        <slot name="toolbar"></slot>
      </section>
    </header>
    <main class="flex-auto flex justify-between">
      <aside class="flex-none w-300px flex">
        <ol class="w-38px bg-white mr-2px">
          <li
            class="h-38px flex justify-center items-center cursor-pointer"
            title="组件库"
          >
            <icon
              icon="hugeicons:menu-square"
              class="color-#666 text-24px"
              :class="{ '!color-#000': activeMenu === menus.get('component') }"
            ></icon>
          </li>
        </ol>
        <section class="w-260px bg-white">
          <main class="box-border p-12px">
            <vue-draggable
              v-for="item in components"
              :key="item.title"
              v-model="item.components"
              target=".component-list"
              :animation="150"
              :group="{ name: 'component', pull: 'clone', put: false }"
              :sort="false"
              :clone="onClone"
            >
              <h2 class="text-16px mb-8px font-bold">{{ item.title }}</h2>
              <article class="component-list grid grid-cols-2 gap-12px mb-8px text-14px">
                <section
                  v-for="component in item.components"
                  class="component-item cursor-pointer list-none py-4px text-center border border-#666 border-solid rounded-4px"
                  :key="component.value"
                >
                  {{ component.label }}
                </section>
              </article>
            </vue-draggable>
          </main>
        </section>
      </aside>
      <article class="box-border relative flex-auto bg-white m-16px">
        <form-designer-wrap
          class="h-full"
          v-model="designerList"
          name="表单"
          :component="rootComponent"
        />
      </article>
      <aside class="flex-none bg-white w-300px">
        <header></header>
      </aside>
    </main>
  </article>
</template>
