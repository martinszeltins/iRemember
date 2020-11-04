import useEnv from '../composition/useEnv.js'
import useHTTP from '../composition/useHTTP.js'

class Categories
{
    static async fetch(data)
    {
        const { env } = useEnv()
        const { objectToQueryString, jsonHeaders, authHeaders } = useHTTP()

        try {
            let queryString = objectToQueryString(data)

            const response = await fetch(`${env('VITE_API_URL')}/categories?${queryString}`, {
                withCredentials: true,
                credentials: 'include',
                headers: { ...jsonHeaders, ...authHeaders },
            })

            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }
}

export default Categories