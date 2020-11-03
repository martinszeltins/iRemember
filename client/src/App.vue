<template>
    <router-view></router-view>

    <app-notification />
</template>

<script>
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

            restoreSession()
        },
    }
</script>