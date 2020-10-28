class Auth
{
    static async login(data)
    {
        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                body: JSON.stringify(data),
            })

            return await response.json()
        } catch (error) {
            
        }
    }
}

export default Auth