<template>
  <div class="">
    <div v-for="item in 1000" :key="item">hello world</div>
  </div>
</template>
<script lang="ts" setup>
import { getPermissionInfo } from '@/api/login'
getPermissionInfo().then((res) => console.log(res))
</script>
