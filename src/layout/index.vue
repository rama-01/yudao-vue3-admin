<template>
  <div class="flex h-full">
    <side-bar class="w-48 h-full" />
    <div class="flex-1 h-full pt-19 overflow-auto">
      <div class="fixed top-0 right-0 left-48">
        <nav-bar class="h-12" />
        <tags-view class="h-7" />
      </div>
      <app-main class="p-5" />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/index.vue'
import NavBar from './components/navbar/index.vue'
import TagsView from './components/tags-view/index.vue'
import AppMain from './components/app-main/index.vue'
export default {
  components: {
    SideBar,
    NavBar,
    TagsView,
    AppMain
  }
}
</script>
