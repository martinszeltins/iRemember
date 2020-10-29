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
    import { useStore } from 'vuex'
    import Auth from '../api/Auth.js'
    import router from '../routes.js'
    import { ref, onMounted } from 'vue'
    import useNotification from '../composition/useNotification.js'

    export default {
        setup()
        {
            onMounted(() => {
                document.title = 'iRemember - login'

                if (localStorage.getItem('token')) {
                    router.push({
                        name: "home"
                    })
                }
            })

            const store = useStore()
            const { showNotification } = useNotification()

            const username = ref('')
            const password = ref('')
            const isLoading = ref(false)

            async function login()
            {
                isLoading.value = true

                const result = await Auth.login({
                    username: username.value,
                    password: password.value,
                })

                isLoading.value = false

                if (result.status_code == 200)
                {
                    let user = { ...result.user, token: result.access_token }

                    store.dispatch('user/setUser', user)

                    router.push({
                        name: "home"
                    })

                    return
                }

                showErrorMessage(result.message)
            }

            function showErrorMessage(message)
            {
                if (message == 'Unauthorized') {
                    showNotification({
                        title: 'Wrong username or password',
                        description: 'The username or password you entered is not correct.',
                    })
                } else {
                    showNotification({
                        title: 'Something went wrong',
                        description: 'Oops! Something went wrong while logging in.',
                    })
                }
            }

            return {
                login, username, password, isLoading
            }
        },
    }
</script>