export default function auth({ to, next, router }) {
    if (!localStorage.getItem('token')) {
        return next('/login')
    }

    return next();
}