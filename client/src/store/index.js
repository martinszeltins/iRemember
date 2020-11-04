import app from './app.js'
import user from './user.js'
import { createStore } from 'vuex'
import categories from './categories.js'
import notification from './notification.js'
 
export default createStore({
    modules:
    {
        app, notification, user, categories
    }
})