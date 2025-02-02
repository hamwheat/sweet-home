import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import ElementPlus from "element-plus"; // 引入element-plus
import zhCn from "element-plus/es/locale/lang/zh-cn"; // 引入中文包
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标
import '../src/assets/style/global.css'; // 引入全局样式文件
import '../src/assets/style/animate.css'; // 引入动画样式文件
import VueFullpage from 'vue-fullpage.js' // 引入fullpage.js
import 'fullpage.js/dist/fullpage.min.css' // 引入fullpage.js的样式文件

const app = createApp(App)
// 引入全部图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, { size: "small", locale: zhCn });

app.use(VueFullpage)

app.mount('#app')
