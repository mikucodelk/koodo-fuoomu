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
updateActive()
const list = computed<propsType[]>({
  get: () => {
    return props.modelValue || []
  },
  set: value => {
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <component
    :is="component"
    class="box-border pos-relative border-2px border-solid border-#fff"
    :class="{
      '!border-#000': isActive
    }"
    v-bind="$attrs"
    @click.stop="updateActive()"
  >
    <vue-draggable
      v-if="dragger"
      class="box-border h-full pb-14px"
      v-model="list"
      :animation="150"
      group="component"
      ghostClass="ghost"
    >
      <form-designer-wrap
        class="pb-14px"
        v-for="item in list"
        :key="item.id"
        v-model="item.children"
        v-bind="item"
      />
    </vue-draggable>
    <template v-else>
      <form-designer-wrap
        class="pb-14px"
        v-for="item in list"
        :key="item.id"
        v-model="item.children"
        v-bind="item"
      />
    </template>
    <section class="pos-absolute bottom-0 w-full flex justify-between mt-2px h-16px text-12px">
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
  </component>
</template>
