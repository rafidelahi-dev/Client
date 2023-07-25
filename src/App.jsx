// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import Registration from './components/registration'
import Login from './components/log_in'
import axios from 'axios'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [myHomePage, setHomePage] = useState([])

  const handleLoginButtonClick = () => {
    setShowLogin(true)
    setShowRegistration(false)
  }

  const handleRegistrationButtonClick = () => {
    setShowLogin(false)
    setShowRegistration(true)
  }

  
    const showhomepage = async () => {
      // try {
        const response = await axios.get(
          'http://localhost:1337/name'
        )
        setHomePage(response.data) // Assuming the server returns an array of products
      // catch (error) { console.error('Error fetching products:', error)
      
    }
    console.log(setHomePage);

    showhomepage()
  

  return (
    <div>
      <h1>Teebay</h1>
      <button onClick={handleLoginButtonClick}>Login</button>
      <button onClick={handleRegistrationButtonClick}>Registration</button>

      {showLogin && <Login />}
      {showRegistration && <Registration />}
      
      <ul>
         
          <li>{myHomePage}</li>
        
      </ul>
    </div>
  )
}

export default App;

/*
login
email password ==

email existing email 
<passw styleName=""></passw>

*/
