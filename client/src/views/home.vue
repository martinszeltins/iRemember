<template>
    <teleport to="head">
        <title>iRemember - all your tasks in one place</title>
    </teleport>

    <app-navbar />

    <div class="home-main">
        <app-sidebar />
        <app-tasks />
    </div>
</template>

<script>
    import AppTasks from '../components/AppTasks.vue'
    import AppNavbar from '../components/AppNavbar.vue'
    import AppSidebar from '../components/AppSidebar.vue'

    export default {
        components:
        {
            AppNavbar,
            AppSidebar,
            AppTasks,
        },
    }
</script>