export default {
    namespaced: true,

    state()
    {
        return {
            title: '',
            description: '',
            show: false,
        }
    },

    actions: 
    {
        showNotification({ commit }, notification)
        {
            commit('showNotification', notification)
        },

        hideNotification({ commit })
        {
            commit('hideNotification')
        },
    },

    mutations:
    {
        showNotification(state, notification)
        {
            state.title = notification.title
            state.description = notification.description
            state.show = true
        },

        hideNotification(state)
        {
            state.title = ''
            state.description = ''
            state.show = false
        },
    },
}