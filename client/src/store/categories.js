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
        async fetch({ commit })
        {
            // const categories = await Categories.fetch({
            //     user_id: ???????
            // })

            // commit('fetch', categories)
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