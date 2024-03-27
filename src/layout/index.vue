<template>
  <div class="flex h-full w-full">
    <side-bar class="w-48 shrink-0" />
    <div class="flex-1 shrink overflow-x-auto">
      <div class="fixed top-0 right-0 left-48 bg-white">
        <nav-bar class="h-12" />
        <tags-view class="h-7" />
      </div>
      <app-main
        class="p-5 mt-19 bg-gray-50 h-[calc(100%-76px)] overflow-auto"
      />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar'
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
