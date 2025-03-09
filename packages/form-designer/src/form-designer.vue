<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { defineProps, ref } from 'vue'
defineOptions({
  name: 'KfcFormDesigner'
})
defineProps({
  text: String
})

const activeMenu = ref('component')

const menus = new Map([['component', 'component']])
</script>

<template>
  <article class="box-border h-full flex flex-col bg-#edeff3">
    <header class="box-border flex-none h-52px bg-white mb-2px px-16px py-8px flex justify-between items-center">
      <h1 class="box-border text-18px">KOODO FUOOMU</h1>
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
              class="color-#666"
              :class="{ '!color-#000': activeMenu === menus.get('component') }"
            ></icon>
          </li>
        </ol>
        <section class="w-260px bg-white"></section>
      </aside>
      <article class="flex-auto bg-white m-16px"></article>
      <aside class="flex-none bg-white w-300px">
        <header></header>
      </aside>
    </main>
  </article>
</template>
