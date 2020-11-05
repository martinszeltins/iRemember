import Categories from '../api/categories.js'

export default {
    namespaced: true,

    state()
    {
        return {
            categories: [],
            isLoading: false,
        }
    },

    actions:
    {
        async fetch({ commit, rootState })
        {
            commit('setLoading', true)
            
            const categories = await Categories.fetch({
                user_id: rootState.user.id
            })
            
            commit('fetch', categories)
            commit('setLoading', false)
        },
    },

    mutations:
    {
        fetch(state, categories)
        {
            state.categories = categories
        },

        setLoading(state, isLoading)
        {
            state.isLoading = isLoading
        },
    },
}