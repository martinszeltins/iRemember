<template>
    <transition name="bounce">
        <div
            v-if="notification.show"
            @click="hideNotification"
            class="notification-popup">

            <div class="notification-popup__left">
                <img
                    class="notification-popup__icon"
                    src="/img/error.png"
                />
            </div>

            <div>
                <div class="notification-popup__title">
                    {{ notification.title }}
                </div>

                <div class="notification-popup__description">
                    {{ notification.description }}
                </div>

                <div v-if="false" class="notification-popup__buttons">
                    <div class="app-button app-button--notification">
                        Button 1
                    </div>

                    <div class="app-button app-button--notification">
                        Button 2
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { useStore } from 'vuex'
    import useNotification from '../composition/useNotification.js'

    export default {
        setup()
        {
            const store = useStore()

            const notification = store.state.notification
            const { hideNotification } = useNotification()

            return {
                store,
                notification,
                hideNotification,
            }
        },
    }
</script>