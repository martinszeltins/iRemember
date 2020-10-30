class Auth
{
    static async login(data)
    {
        try {
            const response = await fetch('http://localhost:49691/login', {
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