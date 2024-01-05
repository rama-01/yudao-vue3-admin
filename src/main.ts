import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/index.scss'  //无法定位文件夹默认index文件
import 'element-plus/dist/index.css'  //element plus样式文件，需要全局导入

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
