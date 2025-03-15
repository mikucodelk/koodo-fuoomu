<script setup lang="ts">
import { KfcForm } from '@koodo-fuoomu/element-plus'
console.log(KfcForm)
</script>

<template>
  <div class="h-100vh">
    <kfc-form-designer :root-component="KfcForm"> </kfc-form-designer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
