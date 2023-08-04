import { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        e.preventDefault()

            console.log(email, password)
        
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

            <button>Sigh up</button>
  </form>  
  )
}
export default Signup