import { useState } from 'react'

const Login = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const userSettings = [
    {
      username: "pigos",
      password: "pass1"
    }
  ]

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const { username, password } = document.forms[0]

    const userData = userSettings.find((user) => user.username === username.value)

    if (userData) {
      if (userData.password !== password.value) {
        console.log('Wrong password')
      } else {
        setIsSubmitted(true)
        console.log('You are log')
      }
    } else {
      console.log('Wrong username')
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" required />
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