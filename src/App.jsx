// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import Registration from './components/registration'
import Login from './components/log_in'
import axios from 'axios'
import { Link } from 'react-router-dom'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)

  const handleLoginButtonClick = () => {
    setShowLogin(true)
    setShowRegistration(false)
  }

  const handleRegistrationButtonClick = () => {
    setShowLogin(false)
    setShowRegistration(true)
  }

  return (
    <div>
      <h1>Teebay</h1>
      <button onClick={handleLoginButtonClick}>Login</button>
      <button onClick={handleRegistrationButtonClick}>Registration</button>

      {showLogin && <Login />}
      {showRegistration && <Registration />}

      <Link to='/homepage'>
        <button>Next Page</button>
      </Link>
    </div>
  )
}

export default App;


