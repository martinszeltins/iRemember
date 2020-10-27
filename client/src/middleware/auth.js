export default function auth({ to, next, router }) {
    let isAuthenticated = true

    if (!isAuthenticated) {
        return next('/login')
    }

    return next();
}