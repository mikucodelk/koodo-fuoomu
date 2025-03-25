<script setup lang="ts">
import { defineProps, defineEmits, computed, inject } from 'vue'
import type { Component, Ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
type propsType = {
  id: string
  name: string
  component: Component | string
  dragger?: boolean
  children?: propsType[]
  [key: string]: unknown
}
const props = defineProps<{
  id: string
  name: string
  modelValue: propsType[]
  component: Component | string
  dragger?: boolean
}>()
const emits = defineEmits(['update:modelValue'])

const { activeId, updateActiveId } = inject<{
  activeId: Ref<string>
  updateActiveId: (id: string) => void
}>('activeId')

const isActive = computed(() => activeId.value === props.id)

const updateActive = () => {
  updateActiveId(props.id)
}
const list = computed<propsType[]>({
  get: () => {
    return props.modelValue || []
  },
  set: value => {
    emits('update:modelValue', value)
  }
})
const onClone = (res: unknown) => {
  return res
}
</script>

<template>
  <component
    :is="component"
    class="box-border p-4px mb-18px pos-relative"
    @click.stop="updateActive()"
  >
    <form-designer-wrap
      class="pos-relative z-2"
      v-for="item in list"
      :class="{
        invisible: !item.dragger
      }"
      :key="item.id"
      v-model="item.children"
      v-bind="item"
    />

    <aside
      class="box-border pos-absolute min-h-full top-2px left-2px bottom-2px right-2px border-1px border-dashed border-#000 p-2px z-1 flex flex-col"
      :class="{ 'border-solid': isActive }"
    >
      <vue-draggable
        v-if="dragger"
        class="box-border h-full p-1px flex-auto"
        v-model="list"
        :animation="150"
        group="component"
        ghostClass="ghost"
        :emptyInsertThreshold="0"
        :clone="onClone"
      >
        <form-designer-wrap
          v-for="item in list"
          :key="item.id"
          v-model="item.children"
          v-bind="item"
        />
      </vue-draggable>
      <section class="pos-absolute bottom-0 left-0 w-full flex justify-between h-16px text-12px">
        <ul
          class="list-none"
          v-if="isActive"
        >
          <li class="px-8px bg-#000 color-white"></li>
        </ul>
        <ul
          class="list-none"
          v-if="isActive"
        >
          <li class="px-8px bg-#000 color-white">{{ name }}</li>
        </ul>
      </section>
    </aside>
  </component>
</template>
