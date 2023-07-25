import React, { useState } from 'react'
import Login from './log_in'

const Registration = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(true)

  const handleRegistrationSubmit = (event) => {
    event.preventDefault()
    // Handle registration form submission logic here (e.g., sending data to the server to create a new account)
    console.log('Registration form submitted:', username, email, password)
  }
  const handleLoginButtonClick = () => {
    setShowLogin(true)
    setShowRegistration(false)
  }
  if (showLogin) {
    // Show the Registration component and hide the Login component
    return <Login />;
  }

  if (showRegistration) {

  return (
    <form onSubmit={handleRegistrationSubmit}>
      <h2>Registration Form</h2>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
      </div>
      <button type='submit'>Register</button>
      <button onClick={handleLoginButtonClick}>
        Already have an account? Click here
      </button>
    </form>
  )
}
}

export default Registration
