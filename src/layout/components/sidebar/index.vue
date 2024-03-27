<template>
  <el-menu>
    <sub-menu
      v-for="item in sidebarRouters"
      :key="item.path"
      :item="item"
      :path="item.path"
    ></sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import SubMenu from './submenu.vue'
import { ref } from 'vue'
import { usePermissionStore } from '@/store/modules/permission'

const sidebarRouters = ref<AppRouteRecordRaw[]>([])
const permissionStore = usePermissionStore()

sidebarRouters.value = permissionStore.getAddRouters
</script>
