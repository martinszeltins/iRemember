export default function auth({ next, router }) {

    let isAuthenticated = true

    if (!isAuthenticated) {
        return next('/login')
    }

    return next();
}