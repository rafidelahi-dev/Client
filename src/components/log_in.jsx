import React, { useState } from 'react'
import Registration from './registration'
import axios from 'axios'

//Main function for Login
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showLogin, setShowLogin] = useState(true)
  const [showRegistration, setShowRegistration] = useState(false)
  
  //Function to call the server side local host
  const logIn = async (email, password) => {
      try {
        // console.log(email, password)
        const response = await axios.post('http://localhost:1337/login', {
          email: email,
          password: password,
        })
        console.log(response.data) 
      }
      catch (error) { console.error('Error fetching products:', error)  
    }   
    }
  const handleLoginSubmit = (event) => {
    event.preventDefault()
    // Handle login form submission logic here (e.g., sending data to the server for authentication)
    console.log('Login form submitted:', email, password)
  }
  const handleRegistrationButtonClick = () => {
    setShowLogin(false)
    setShowRegistration(true)
  }
  if (showRegistration) {
    // Show the Registration component and hide the Login component
    return <Registration />;
  }

  if (showLogin) {
  return (
    <form onSubmit={handleLoginSubmit}>
      <h2>Login Form</h2>
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
      <button type='submit' onClick={() => {
        logIn(email, password);
      }}>Login</button>
      <button onClick={handleRegistrationButtonClick}>
        Don't have an account? Click here
      </button>
      
    </form>
  )
}
}
export default Login
