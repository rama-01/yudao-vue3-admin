<template>
  <el-menu-item :index="item.path" v-if="item.children!.length <= 0">
    <span slot="title">{{ item.name }}</span>
  </el-menu-item>
  <el-submenu :index="item.path" v-else>
    <template v-slot:title>
      <span>{{ item.name }}</span>
    </template>
    <sub-menu
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :path="child.path"
    ></sub-menu>
  </el-submenu>
</template>

<script lang="ts" setup>
defineOptions({ name: 'SubMenu' })
defineProps<{ item: AppRouteRecordRaw }>()
</script>
