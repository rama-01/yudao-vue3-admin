<template>
  <el-menu>
    <!-- <sub-menu v-for="item in roleRouters" :key="item.id" :item="item" :path="item.path"></sub-menu> -->
  </el-menu>
</template>

<script>
import SubMenu from './submenu.vue'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
export default {
  components: { SubMenu },
  computed: {
    roleRouters() {
      const { wsCache } = useCache()
      return wsCache.get(CACHE_KEY.ROLE_ROUTERS)
    }
  }
}
</script>
