import { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8000/login", {
      username: username,
      password: password
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login