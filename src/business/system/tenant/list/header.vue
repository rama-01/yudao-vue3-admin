<template>
  <el-form
    ref="tenantFormRef"
    :model="searchParams"
    :inline="true"
    label-width="68px"
    class="border border-slate-200 p-5 shadow-sm mb-4"
  >
    <el-form-item label="租户名" prop="name">
      <el-input v-model="searchParams.name" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="联系人" prop="contactName">
      <el-input v-model="searchParams.contactName" placeholder="请输入联系人" />
    </el-form-item>
    <el-form-item label="联系手机" prop="contactMobile">
      <el-input
        v-model="searchParams.contactMobile"
        placeholder="请输入手机号"
      />
    </el-form-item>
    <el-form-item label="租户状态" prop="status">
      <el-select v-model="searchParams.status" placeholder="请选择租户状态">
        <el-option label="开启" value="1" />
        <el-option label="关闭" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item label="创建时间" prop="createTime">
      <el-date-picker
        class="w-60"
        v-model="searchParams.createTime"
        value-format="YYYY-MM-DD HH:mm:ss"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
      />
    </el-form-item>
    <el-form-item>
      <el-button :icon="Search" @click="emit('action-event', 'search')">
        搜索
      </el-button>
      <el-button :icon="Refresh" @click="handleReset(tenantFormRef)">
        重置
      </el-button>
      <el-button
        :icon="Plus"
        plain
        type="primary"
        @click="emit('action-event', 'add')"
      >
        新增
      </el-button>
      <el-button
        :icon="Download"
        plain
        type="success"
        @click="emit('action-event', 'download')"
      >
        导出
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { Search, Refresh, Plus, Download } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'

export interface TenantForm {
  pageNo: number
  pageSize: number
  name?: string
  contactName?: string
  contactMobile?: string
  status?: number
  createTime?: []
}
defineProps<{ searchParams: TenantForm }>()
const emit = defineEmits(['action-event'])
const tenantFormRef = ref<FormInstance>()

/* reset form */
const handleReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('action-event', 'reset')
}
</script>
