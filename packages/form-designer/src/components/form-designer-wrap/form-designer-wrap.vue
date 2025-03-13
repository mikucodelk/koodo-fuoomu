<script setup lang="ts">
import { defineProps, defineEmits, computed, useId, inject } from 'vue'
import type { Component, Ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
type propsType = {
  name: string
  component: Component | string
  children?: propsType[]
  [key: string]: unknown
}
const props = defineProps<{
  name: string
  modelValue: propsType[]
  component: Component | string
}>()
const emits = defineEmits(['update:modelValue'])

const id = useId()
const { activeId, updateActiveId } = inject<{
  activeId: Ref<string>
  updateActiveId: (id: string) => void
}>('activeId')

const isActive = computed(() => activeId.value === id)

const updateActive = () => {
  updateActiveId(id)
}
updateActive()
const list = computed<propsType[]>({
  get: () => {
    return props.modelValue
  },
  set: value => {
    console.log(value)
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <section
    class="pos-relative border-#fff border-solid border-2px"
    :class="{ '!border-#000': isActive }"
    @click.stop="updateActive"
  >
    <component :is="component">
      <section class="h-full">
        <vue-draggable
          class="box-border h-full"
          v-model="list"
          :animation="150"
          group="component"
          ghostClass="ghost"
        >
          <form-designer-wrap
            v-for="(item, index) in list"
            :key="index"
            v-model="item.children"
            v-bind="item"
          />
        </vue-draggable>
      </section>
    </component>
    <aside
      v-if="isActive"
      class="absolute right-3px bottom-3px px-8px py-4px bg-#000 color-white text-12px"
    >
      {{ name }}
    </aside>
  </section>
</template>
