import { createWebHistory, createRouter } from "vue-router"

import Home from "./views/home.vue"
import Login from "./views/login.vue"
import auth from './middleware/auth.js'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


/**
 * Route Middleware
 */

function nextFactory(context, middleware, index)
{
    const subsequentMiddleware = middleware[index]

    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware)
    {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next();
})

export default router