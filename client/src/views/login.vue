<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-box__logo">
                <img class="login-box__logo-img" src="/img/logo.png" />
                <div class="login-box__logo-text">iRemember</div>
            </div>

            <div class="login-box__title">Log in</div>

            <div class="login-box__label">Username</div>
            <input v-focus class="login-box__input" />

            <div class="login-box__label">Password</div>
            <input class="login-box__input" type="password" />

            <div class="app-button app-button--login">
                Log in
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup()
        {
            
        },
    }
</script>