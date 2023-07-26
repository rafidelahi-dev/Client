import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
 const mockProd = {
  "id": 48,
"title": "asdfsd",
"description": "asfdasd",
"purchase_price": 100,
"rent_price": 100,
"rent_duration": "daily",
"ownerId": 1
}
 
 const handleAddProduct = async (mockProd) => {
  try{
   const response = await axios.post(`http://localhost:1337/name/myproducts/add`, 
   mockProd
   ) 
   console.log(response.data) 
  }
  catch(error) {
   console.log(error)
  }
 }  
 const handleButton = () => {
  handleAddProduct(mockProd)
 }
 const handleVisitButton = () => {
   // Replace this function with the appropriate logic for visiting the respective pages
   console.log('Visit button clicked')
 }
 
return (
  <div className='card-container'>
    <div className='card'>
      <h2>My products</h2>
      <p>No items yet</p>
      <Link to='/myproducts'>
        {/* Use Link to navigate to MyProducts */}
        <button onClick={handleVisitButton}>Visit</button>
      </Link>
    </div>
    <div className='card'>
      <h2>All products</h2>
      <p>No items yet</p>
      <button onClick={handleVisitButton}>Visit</button>
    </div>
  </div>
)
};


export default Homepage;
