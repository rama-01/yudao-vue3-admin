<template>
  <div>
    <el-table :data="tenantList" style="width: 100%">
      <el-table-column prop="id" label="租户编号" />
      <el-table-column prop="name" label="租户名" />
      <el-table-column prop="packageId" label="租户套餐" />
      <el-table-column prop="contactName" label="联系人" />
      <el-table-column prop="contactMobile" label="联系手机" width="120" />
      <el-table-column prop="accountCount" label="账号额度" />
      <el-table-column prop="expireTime" label="过期时间" width="150" />
      <el-table-column prop="website" label="绑定域名" width="150" />
      <el-table-column prop="status" label="租户状态" />
      <el-table-column prop="createTime" label="创建时间" width="150" />
      <el-table-column label="操作" width="120" fixed="right">
        <template #default="{ row: { id } }">
          <el-button
            link
            type="primary"
            size="small"
            @click="$emit('action-event', 'edit', id)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            size="small"
            @click="$emit('action-event', 'delete', id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
defineProps({ tenantList: Array })
</script>
