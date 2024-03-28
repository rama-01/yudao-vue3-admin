<template>
  <tenant-header :searchParams="searchParams" @action-event="handleActionEvent" />
  <tenant-table :tenantList="tenantList" @action-event="handleActionEvent" />
  <edit-popup v-model:visible="editPopup.visible" :data="editPopup.data" @action-event="handleActionEvent" />
</template>
<script lang="ts" setup>
import TenantHeader, { TenantForm } from '@/business/system/tenant/header.vue'
import TenantTable from '@/business/system/tenant/table.vue'
import EditPopup from '@/business/system/tenant/editPopup.vue'
import { getTenantList, deleteTenant, createTenant, getSingleTenant, updateTenant } from '@/api/system/tenant'
import { getCurrentInstance, ComponentInternalInstance } from 'vue'
import { ElMessage } from 'element-plus'

/* get tenant list */
const tenantList = ref<any[]>([])
const searchParams = reactive<TenantForm>({
  pageNo: 1,
  pageSize: 10,
  name: undefined,
  contactName: undefined,
  contactMobile: undefined,
  status: undefined,
  createTime: []
})
const getList = () => getTenantList(searchParams).then((res) => (tenantList.value = res?.list ?? []))
getList()

/* edit popup */
const editPopup = reactive({
  visible: false,
  data: null
})

/* watch child component event listener */
const { proxy } = getCurrentInstance() as ComponentInternalInstance
const handleActionEvent = (event, data) => {
  switch (event) {
    case 'delete':
      proxy?.$confirm('是否删除所选中的数据?', () => deleteTenant(data).then(() => getList()))
      break
    case 'search':
    case 'reset':
      getList()
      break
    case 'add':
      editPopup.visible = true
      editPopup.data = null
      break
    case 'edit':
      editPopup.visible = true
      getSingleTenant(data).then((res) => (editPopup.data = res))
      break
    case 'create':
      createTenant(data).then(() => {
        getList()
        ElMessage({
          message: '新增租户成功',
          type: 'success'
        })
      })
      break
    case 'update':
      updateTenant(data).then(() => {
        getList()
        ElMessage({
          message: '编辑租户成功',
          type: 'success'
        })
      })
      break
  }
}
</script>
