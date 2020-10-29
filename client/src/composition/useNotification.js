import { useStore } from 'vuex'

function useNotification()
{
    const store = useStore()

    function showNotification(notification)
    {
        store.dispatch('notification/showNotification', notification)

        setTimeout(() => {
            hideNotification()
        }, 4000)
    }

    function hideNotification()
    {
        store.dispatch('notification/hideNotification')
    }

    return {
        showNotification, hideNotification
    }
}

export default useNotification