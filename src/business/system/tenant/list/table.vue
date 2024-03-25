<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface Foo {}
const tableData = ref<{ date: string; name: string; address: string }[]>([])
for (let i = 0; i < 1000; i++) {
  tableData.value.push({
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  })
}
</script>
