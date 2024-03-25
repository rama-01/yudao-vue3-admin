<template>
  <tenant-header />
  <tenant-table />
  <edit-popup />
</template>
<script lang="ts" setup>
import TenantHeader from '@/business/system/tenant/list/header.vue'
import TenantTable from '@/business/system/tenant/list/table.vue'
import EditPopup from '@/business/system/tenant/list/editPopup.vue'
import { getTenantList } from '@/api/system/tenant'

getTenantList().then((res) => console.log(res))
</script>
