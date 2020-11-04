import Categories from '../api/categories.js'

export default {
    namespaced: true,

    state()
    {
        return {
            categories: [],
        }
    },

    actions:
    {
        async fetch({ commit, rootState })
        {
            const categories = await Categories.fetch({
                user_id: rootState.user.id
            })

            commit('fetch', categories)
        },
    },

    mutations:
    {
        fetch(state, categories)
        {
            state.categories = categories
        },
    },
}