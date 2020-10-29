export default {
    namespaced: true,

    state()
    {
        return {
            loggedIn: false,
            user: {},
        }
    },

    actions:
    {
        setUser({ commit }, user)
        {
            commit('setUser', user)
        },
    },

    mutations:
    {
        setUser(state, user)
        {
            state.user = user
            localStorage.setItem('iremember_user', JSON.stringify(user))
        },
    },
}