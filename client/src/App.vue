<template>
    <router-view></router-view>

    <app-notification />
</template>

<script>
    import AppNotification from './components/AppNotification.vue'

    export default {
        components:
        {
            AppNotification
        },
    }
</script>