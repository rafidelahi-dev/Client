import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom' // Import BrowserRouter, Route, and Switch
import App from './App.jsx'
import Homepage from './components/homepage.jsx' // Import the Homepage component
import './index.css'
import MyProducts from './components/myproducts.jsx'

// Use ReactDOM.createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/myproducts' element={<MyProducts />} />
    </Routes>
  </BrowserRouter>
)

/* Previous State
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/