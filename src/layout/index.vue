<template>
  <div class="">layout</div>
</template>
<script lang="ts" setup>
import { getPermissionInfo } from '@/api/login'
getPermissionInfo().then((res) => console.log(res))
</script>
