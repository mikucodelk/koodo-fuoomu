<script setup lang="ts">
import { ref } from 'vue'
const a = ref('hello world')
</script>

<template>
  <div class="m-4">
    <kfc-form-designer :text="a"> </kfc-form-designer>
  </div>
</template>
