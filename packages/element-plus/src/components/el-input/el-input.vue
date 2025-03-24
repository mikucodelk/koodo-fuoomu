<script setup lang="ts">
defineOptions({
  name: 'KfcInput'
})
</script>

<template>
  <section>
    <el-form-item>
      <el-input></el-input>
    </el-form-item>
    <slot></slot>
  </section>
</template>
