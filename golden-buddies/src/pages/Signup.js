import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async () => {
        e.preventDefault()

            await signup(email, password)
    }

    return (
        <form className="sighup" onsubmit={handleSubmit}> 
            <h3> Sigh up</h3>

            <label>Email:</label>
            <input 
            type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}/>

            <label>"Password":</label>
            <input 
            type="password" onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            <button disabled={isLoading}>Sigh up</button>
            {error && <div className="error">{error}</div>}
  </form>  
  )
}
export default Signup