<template>
  <div class="flex h-full no-scrollbar">
    <side-bar class="w-48 h-full" />
    <div class="flex flex-col flex-1 h-full overflow-auto">
      <nav-bar class="h-12" />
      <tags-view class="h-7" />
      <app-main class="flex-1 p-5 overflow-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import TagsView from './components/tags-view'
import AppMain from './components/app-main'
</script>
