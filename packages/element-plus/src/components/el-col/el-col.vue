<script setup lang="ts">
defineOptions({
  name: 'KfcCol'
})
</script>

<template>
  <el-col
    :span="12"
    v-bind="$attrs"
    class="min-h-52px"
  >
    <slot></slot>
  </el-col>
</template>
