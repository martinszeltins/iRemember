import store from '../store/index.js'

function restoreSession()
{
    let user = localStorage.getItem('iremember_user')

    if (user) {
        store.dispatch('user/setUser', JSON.parse(user))
    }
}

export { restoreSession }