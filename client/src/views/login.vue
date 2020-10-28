<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-box__logo">
                <img class="login-box__logo-img" src="/img/logo.png" />
                <div class="login-box__logo-text">iRemember</div>
            </div>

            <div class="login-box__title">Log in</div>

            <div class="login-box__label">Username</div>
            <input v-model="username" v-focus class="login-box__input" />

            <div class="login-box__label">Password</div>
            <input v-model="password" class="login-box__input" type="password" />

            <div
                @click="login"
                class="app-button app-button--login">

                Log in or Register
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from '../api/Auth.js'
    import { ref, onMounted } from 'vue' 

    export default {
        setup()
        {
            const title = ref('iRemember - login')
            const username = ref('')
            const password = ref('')

            onMounted(() => {
                document.title = title.value
            })

            async function login()
            {
                const result = await Auth.login({
                    username: username.value,
                    password: password.value,
                })

                alert(JSON.stringify(result))
            }

            return {
                login, username, password
            }
        },
    }
</script>