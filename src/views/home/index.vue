<template>
  <div>home</div>
</template>
<script lang="ts" setup>
const data = ref<number[]>([])
for (let i = 0; i < 10000; i++) {
  data.value.push(i)
}
</script>
