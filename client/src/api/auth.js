import useEnv from '../composition/useEnv.js'

class Auth
{
    static async login(data)
    {
        const { env } = useEnv()

        try {
            const response = await fetch(`${env('VITE_API_URL')}/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })

            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }
}

export default Auth