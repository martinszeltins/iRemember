import { useStore } from 'vuex'

function useNotification()
{
    const store = useStore()

    /**
     * Show notification
     * 
     * @param notification object
     */
    function showNotification(notification)
    {
        store.dispatch('notification/showNotification', notification)

        setTimeout(() => {
            hideNotification()
        }, 4000)
    }

    /**
     * Hide notification
     */
    function hideNotification()
    {
        store.dispatch('notification/hideNotification')
    }

    
    return {
        showNotification, hideNotification
    }
}

export default useNotification