<template>
  <div class="flex justify-between items-center">
    <div>
      <el-icon><Fold /></el-icon>
      <el-icon><Expand /></el-icon>
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
            <el-dropdown-item>布局设置</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
