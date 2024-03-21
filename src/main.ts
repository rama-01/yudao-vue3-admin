import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/index.scss' //无法定位文件夹默认index文件
import 'element-plus/dist/index.css' //element plus样式文件，需要全局导入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'

const app = createApp(App)
/* 注册所有图标 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.mount('#app')
