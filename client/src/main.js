import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes.js'
import store from './store/index.js'
import '/css/reboot.css'
import '/css/material-icons.css'
import '/css/style.css'

const app = createApp(App)

app.use(store)
app.use(routes)

app.mount('#app')