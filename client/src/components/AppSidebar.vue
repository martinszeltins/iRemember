<template>
    <div class="app-sidebar">
        <div
            v-if="categories.isLoading"
            class="app-sidebar__categories-loading">
            
            <loading-roller />
        </div>

        <div v-if="!categories.isLoading">
            <div
                v-for="category in categories.categories"
                class="app-sidebar__item">
                
                <div
                    class="app-sidebar__dot"
                    :style="{ 'background-color': category.color }">
                </div>

                <div class="app-sidebar__text">
                    {{ category.description }}
                </div>
            </div>

            <div class="app-sidebar__add">
                <span class="material-icons">add</span>
                <div>Add new</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import LoadingRollerVue from './Loading/LoadingRoller.vue'

    export default {
        components:
        {
            'loading-roller': LoadingRollerVue
        },

        setup()
        {
            const store = useStore()

            store.dispatch('categories/fetch')

            const categories = computed(() => {
                return store.state.categories
            })

            return {
                categories
            }
        },
    }
</script>