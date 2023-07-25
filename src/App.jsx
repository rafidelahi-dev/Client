// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react'
import Registration from './components/registration'
import Login from './components/log_in'
import axios from 'axios'


const App = () => {
  const getQuote = () => {
    axios.get('https://motivationping.com/money-quotes/').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
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
    </div>
  )
}

export default App
