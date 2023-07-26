import axios from 'axios'
import React, { useState } from 'react'
import { json } from 'react-router-dom'


const NameForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('')

  const handleNameChange = (e) => {
    setProductName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(productName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type='text' value={productName} onChange={handleNameChange} />
      </label>
      <button type='submit'>Next</button>
    </form>
  )
}

const PriceAndRentalPriceForm = ({ onSubmit, onBack }) => {
  const [productPrice, setProductPrice] = useState('')
  const [productRentalPrice, setProductRentalPrice] = useState('')

  const handlePriceChange = (e) => {
    setProductPrice(e.target.value)
  }

  const handleRentalPriceChange = (e) => {
    setProductRentalPrice(e.target.value)
  }

  const handleSubmit = () => {
    
    onSubmit(productPrice, productRentalPrice)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Price:
        <input
          type='number'
          value={productPrice}
          onChange={handlePriceChange}
        />
      </label>
      <label>
        Product Rental Price:
        <input
          type='number'
          value={productRentalPrice}
          onChange={handleRentalPriceChange}
        />
      </label>
      <button onClick={onBack}>Back</button>
      <button type='submit'>Next</button>
    </form>
  )
}

const CategoryForm = ({ onSubmit, onBack }) => {
  const [productCategory, setProductCategory] = useState('')

  const handleCategoryChange = (e) => {
    setProductCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(productCategory)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Category:
        <select value={productCategory} onChange={handleCategoryChange}>
          <option value=''>Select a category</option>
          <option value='electronics'>Electronics</option>
          <option value='food'>Food</option>
          <option value='books'>Books</option>
        </select>
      </label>
      <button onClick={onBack}>Back</button>
      <button type='submit'>Complete</button>
    </form>
  )
}

const MyProducts = () => {
  const [showNameForm, setShowNameForm] = useState(false)
  const [productName, setProductName] = useState('')
  const [showPriceAndRentalForm, setShowPriceAndRentalForm] = useState(false)
  const [productPrice, setProductPrice] = useState('')
  const [productRentalPrice, setProductRentalPrice] = useState('')
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [productCategory, setProductCategory] = useState('')
  const [showMainContent, setShowMainContent] = useState(true)
  const [newItemAdded, setNewItemAdded] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [receivedData, setReceivedData] = useState(null)

  const handleBackButtonClick = () => {
    setCurrentStep((prevStep) => prevStep - 1)
  }

  const handleAddButtonClick = () => {
    setShowNameForm(true)
    setShowMainContent(false)
    setNewItemAdded(false)
  }

  const handleNameFormSubmit = (productName) => {
    setProductName(productName)
    setCurrentStep(1) // Move to the next step
  }

  const handlePriceAndRentalFormSubmit = (productPrice, productRentalPrice) => {
    setProductPrice(productPrice)
    setProductRentalPrice(productRentalPrice)
    setCurrentStep(2) // Move to the next step
  }

  const handleCategoryFormSubmit = (productCategory) => {
    setProductCategory(productCategory)
    setCurrentStep(3) // Move to the next step
  }

  const handleCompleteButton = async () => {
    try {
      const response = await axios.post(
        'http://localhost:1337/name/myproducts/add',
        {
          name: productName,
          price: productPrice,
          rentalPrice: productRentalPrice,
          category: productCategory,
        }
      )

      // Set the received data in the state only on successful response
      setReceivedData(response.data)
        console.log(response)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }

    // When 'Complete' button is clicked, show the main content again
    setShowMainContent(true)
    setNewItemAdded(true)
    setShowCategoryForm(false)
    setCurrentStep(0) // Reset the current step to the initial step
  }

  return (
    <div>
      <div>
        <h2>Teebay ... giving you the best deals</h2>
      </div>
      {newItemAdded ? (
        <div>
          <h1>A new item was added</h1>
          <button onClick={handleAddButtonClick}>ADD</button>
        </div>
      ) : (
        <div>
          {currentStep === 0 && (
            <div>
              {showMainContent && (
                <div>
                  <h1>There is no item</h1>
                  <button onClick={handleAddButtonClick}>ADD</button>
                </div>
              )}

              {showNameForm && <NameForm onSubmit={handleNameFormSubmit} />}
            </div>
          )}
          {currentStep === 1 && (
            <PriceAndRentalPriceForm
              onSubmit={handlePriceAndRentalFormSubmit}
              onBack={handleBackButtonClick}
            />
          )}

          {currentStep === 2 && (
            <CategoryForm
              onSubmit={handleCategoryFormSubmit}
              onBack={handleBackButtonClick}
            />
          )}

          {currentStep === 3 && (
            <button onClick={handleCompleteButton}>Complete</button>
          )}
          <div>{JSON.stringify(receivedData)}</div>
          {receivedData && (
            <div>
              <h3>Received Data:</h3>
              <p>Name: {receivedData.name}</p>
              <p>Price: {receivedData.price}</p>
              <p>Rental Price: {receivedData.rentalPrice}</p>
              <p>Category: {receivedData.category}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MyProducts

/*import axios from 'axios'
import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const MyProducts = () => {
  const [showNameForm, setShowNameForm] = useState(false)
  // const history = useHistory()

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

      {// Render pop-up forms conditionally }
      {showNameForm && <NameForm onSubmit={handleNameFormSubmit} />}
      {// Render other pop-up forms similarly }
    </div>
  )
}

export default MyProducts

*/
