<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>

        <app-notification />
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useAuth from './composition/useAuth.js'
    import AppNotification from './components/AppNotification.vue'

    export default {
        components:
        {
            AppNotification
        },

        setup()
        {
            const { restoreSession } = useAuth()
            const store = useStore()

            const app = computed(() => store.state.app)

            restoreSession()

            return {
                app
            }
        },
    }
</script>