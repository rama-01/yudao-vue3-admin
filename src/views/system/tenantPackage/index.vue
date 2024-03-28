<template>
  <ul>
    <li v-for="item in array">{{ item }}</li>
  </ul>
</template>
<script lang="ts" setup>
const array = ref<number[]>([])
for (let i = 0; i < 10000; i++) {
  array.value.push(i)
}
</script>
