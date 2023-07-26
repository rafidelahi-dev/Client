import axios from 'axios'
import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const MyProducts = () => {
  const [showNameForm, setShowNameForm] = useState(false)
  const history = useHistory()

  const handleAddButtonClick = () => {
    setShowNameForm(true)
  }

  const handleNameFormSubmit = (productName) => {
    // Save productName to state or context for later use
    // Show the next form (price and rental price)
  }

  // Implement the rest of the form submission handlers and states for price, rental price, and category

  const handleCompleteButton = async (productName, productPrice, productRentalPrice, productCategory) => {
    // Send the collected data to the backend using fetch or axios
    // For example:
    // fetch('http://localhost:1337/name/myproducts/add', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: productName,
    //     price: productPrice,
    //     rentalPrice: productRentalPrice,
    //     category: productCategory,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // Then, navigate to the desired page, for example:
   try {
    const response = await axios.post(`http://localhost:1337/name/myproducts/add`, {
        name: productName,
        price: productPrice,
        rentalPrice: productRentalPrice,
        category: productCategory,
      })
      console.log(response.data)
   }
   catch (error) {
    console.log(error)
   }

    // history.push('/success')
  }

  return (
    <div>
      <h1>There is no item</h1>
      <button onClick={handleAddButtonClick}>ADD</button>

      {/* Render pop-up forms conditionally */}
      {showNameForm && <NameForm onSubmit={handleNameFormSubmit} />}
      {/* Render other pop-up forms similarly */}
    </div>
  )
}

export default MyProducts
