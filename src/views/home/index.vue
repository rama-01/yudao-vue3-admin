<template>
  <p v-for="(item, index) in data" :key="index">{{ item }}</p>
</template>
<script lang="ts" setup>
const data = ref<number[]>([])
for (let i = 0; i < 10000; i++) {
  data.value.push(i)
}
</script>
