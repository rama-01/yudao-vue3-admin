<template>
  <div class="flex justify-between items-center">
    <div>
      <el-icon><Fold /></el-icon>
    </div>
    <div class="flex items-center">
      <img alt="avatar" class="w-9 h-9 rounded-full mr-1" src="@/assets/images/avatar.png" />
      <el-dropdown class="mr-7" trigger="click">
        <span class="el-dropdown-link">
          fuint
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

const { replace } = useRouter()
const userStore = useUserStore()
const logout = async () => {
  ElMessageBox.confirm('是否退出本系统?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await userStore.loginOut()
      replace({ path: '/login' })
    })
    .catch(() => {})
}
</script>
