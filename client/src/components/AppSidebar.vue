<template>
    <div class="app-sidebar">
        <div class="app-sidebar__item">
            <div class="app-sidebar__dot app-sidebar__dot--priority"></div>
            <div class="app-sidebar__text">Priority</div>
        </div>

        <div class="app-sidebar__item">
            <div class="app-sidebar__dot app-sidebar__dot--next-week"></div>
            <div class="app-sidebar__text">Next week</div>
        </div>

        <div class="app-sidebar__item">
            <div class="app-sidebar__dot app-sidebar__dot--later"></div>
            <div class="app-sidebar__text">Later</div>
        </div>

        <div class="app-sidebar__add">
            <span class="material-icons">add</span>
            <div>Add new</div>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { onMounted } from 'vue'

    export default {
        setup()
        {
            const store = useStore()

            onMounted(() => {
                store.dispatch('categories/fetch')
            })
        },
    }
</script>