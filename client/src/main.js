import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes.js'
import store from './store/index.js'

const app = createApp(App)

app.use(store)
app.use(routes)

app.mount('#app')