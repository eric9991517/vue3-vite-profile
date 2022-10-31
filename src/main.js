import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import VueScrollactive from 'vue-scrollactive';
// import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
// import router from "./router"
// createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
