<script setup lang="ts">
import { defineProps } from 'vue'
defineOptions({
  name: 'KfcFormDesigner'
})
defineProps({
  text: String
})
</script>

<template>
  <article>
    <header>
      <h1>{{ text }}12311111</h1>
      <section>11234445123456</section>
    </header>
    <main>
      <aside>
        <ol>
          <li></li>
          <li></li>
        </ol>
        <section></section>
      </aside>
      <article></article>
      <aside>
        <header></header>
      </aside>
    </main>
  </article>
</template>
