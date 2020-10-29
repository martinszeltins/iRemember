class Auth
{
    static async login(data)
    {
        try {
            const response = await fetch('http://localhost:8000/login', {
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