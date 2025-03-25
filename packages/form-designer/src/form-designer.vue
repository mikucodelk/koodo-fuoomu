<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { Icon } from '@iconify/vue'
import { defineProps, ref, provide } from 'vue'
import formDesignerWrap from './components/form-designer-wrap/form-designer-wrap.vue'
import type { Component } from 'vue'
import { v4 as uuidv4 } from 'uuid'

defineOptions({
  name: 'KfcFormDesigner'
})
type listType = {
  name: string
  component: Component | string
}

type ComponentItem = {
  title: string
  list: listType[]
}
defineProps<{
  rootComponent: Component
  rootName: string
  components: ComponentItem[]
}>()
const id = ref(uuidv4())
const activeMenu = ref('component')

const menus = new Map([['component', 'component']])

const onClone = res => {
  const id = uuidv4()
  activeId.value = id
  return {
    id,
    name: res.name,
    component: res.component,
    children: res?.children?.map?.(v => ({ ...v, id: uuidv4() })) || []
  }
}
const designerList = ref([])
const activeId = ref('')
const updateActiveId = id => {
  activeId.value = id
}
provide('activeId', { activeId, updateActiveId })
</script>

<template>
  <article class="box-border h-full flex flex-col bg-#edeff3">
    <header class="box-border flex-none h-52px bg-white mb-2px px-16px py-8px flex justify-between items-center">
      <h1 class="box-border text-24px">KOODO FUOOMU</h1>
      <section>
        <slot name="toolbar"></slot>
      </section>
    </header>
    <main class="flex-1 flex justify-between overflow-hidden">
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
              v-model="item.list"
              :emptyInsertThreshold="0"
              target=".component-list"
              :group="{ name: 'component', pull: 'clone', put: false }"
              :sort="false"
              :clone="onClone"
            >
              <h2 class="text-16px mb-8px font-bold">{{ item.title }}</h2>
              <article class="component-list grid grid-cols-2 gap-12px mb-8px text-14px">
                <section
                  v-for="(component, index) in item.list"
                  class="component-item cursor-pointer list-none py-4px text-center border border-#666 border-solid rounded-4px"
                  :key="index"
                >
                  {{ component.name }}
                </section>
              </article>
            </vue-draggable>
          </main>
        </section>
      </aside>
      <article class="box-border relative flex-auto p-16px overflow-y-auto overflow-x-hidden">
        <main class="bg-white h-full">
          <form-designer-wrap
            class="h-full !mb-0"
            dragger
            :id="id"
            v-model="designerList"
            :name="rootName"
            :component="rootComponent"
          />
        </main>
      </article>
      <aside class="flex-none bg-white w-300px">
        <header></header>
      </aside>
    </main>
  </article>
</template>
