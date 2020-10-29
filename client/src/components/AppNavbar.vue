<template>
    <div class="navbar">
        <img class="navbar__btn" src="/img/logo-hallow.svg" />

        <div class="navbar__find-container">
            <div class="navbar__find">
                <img class="navbar__find-img" src="/img/find.svg">
                <input class="navbar__find-input" type="text" placeholder="Find" />
            </div>
        </div>

        <div class="navbar__username">{{ user.username }}</div>

        <img class="navbar__settings" src="/img/settings.svg" />
    </div>
</template>

<script>
    import { useStore } from 'vuex'

    export default {
        setup()
        {
            const store = useStore()

            const user = store.state.user.user

            return {
                user
            }
        }
    }
</script>