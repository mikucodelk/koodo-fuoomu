<script setup lang="ts">
defineOptions({
  name: 'KfcCol'
})
</script>

<template>
  <el-col
    :span="12"
    class="h-200px"
  >
    <slot></slot>
  </el-col>
</template>
