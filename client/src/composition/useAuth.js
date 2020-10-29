import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '../routes.js'
import Auth from '../api/auth.js'
import useNotification from '../composition/useNotification.js'

function useAuth()
{
    const store = useStore()
    const { showNotification } = useNotification()

    const username = ref('')
    const password = ref('')
    const isLoading = ref(false)

    /**
     * Perform user login
     */
    async function login()
    {
        isLoading.value = true

        const result = await Auth.login({
            username: username.value,
            password: password.value,
        })

        isLoading.value = false

        if (loginSuccessful(result)) {
            setUserInStore(result.user, result.access_token)
            goToRoute('home')
        } else {
            showErrorMessage(result?.message ?? 'Error')
        }
    }

    /**
     * Check if login was successful
     * 
     * @param result json
     * @return boolean
     */
    function loginSuccessful(result)
    {
        return result !== undefined && result.status_code == 200
    }

    /**
     * Save the logged in user in store
     * 
     * @param user object
     * @param access_token string
     */
    function setUserInStore(user, access_token)
    {
        store.dispatch('user/setUser', {
            ...user,
            token: access_token,
        })
    }

    /**
     * Go to route after login
     * 
     * @param route string
     */
    function goToRoute(route)
    {
        router.push({
            name: "home"
        })
    }

    /**
     * Show error if login was unsuccessful
     * 
     * @param message string
     */
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
}

export default useAuth