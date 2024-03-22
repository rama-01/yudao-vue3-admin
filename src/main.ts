import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router, { setupRouter } from './router'
import './assets/styles/index.scss' //无法定位文件夹默认index文件
import 'element-plus/dist/index.css' //element plus样式文件，需要全局导入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'

// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  app.use(createPinia())

  /* 注册所有图标 */
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  setupRouter(app)

  await router.isReady()

  app.mount('#app')
}

setupAll()
