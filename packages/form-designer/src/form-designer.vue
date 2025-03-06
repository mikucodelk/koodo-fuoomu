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
  <div>
    {{ text }}
  </div>
</template>
