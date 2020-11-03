<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-box__logo">
                <img class="login-box__logo-img" src="/img/logo.png" />
                <div class="login-box__logo-text">iRemember</div>
            </div>

            <div class="login-box__title">Log in</div>

            <div class="login-box__label">Username</div>

            <input
                @keyup.enter="login"
                v-model="username"
                v-focus
                class="login-box__input"
            />

            <div class="login-box__label">Password</div>

            <input
                @keyup.enter="login"
                v-model="password"
                class="login-box__input"
                type="password"
            />

            <div
                @click="login"
                class="app-button app-button--login"
                :class="{ 'app-button--loading': isLoading }">

                Log in or Register
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted } from 'vue'
    import router from '../routes.js'
    import useAuth from '../composition/useAuth.js'

    export default {
        setup()
        {
            const { login, username, password, isLoading, userLoggedIn } = useAuth()

            onMounted(() => {
                document.title = 'iRemember - login'

                if (userLoggedIn()) {
                    router.push({ name: "home" })
                }
            })

            return {
                login, username, password, isLoading
            }
        },
    }
</script>