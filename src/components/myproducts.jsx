import axios from 'axios'
import React, { useState } from 'react'

const NameForm = ({ onSubmit, productName }) => {
  const [localProductName, setLocalProductName] = useState('')

  const handleNameChange = (e) => {
    setLocalProductName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(localProductName)
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

const PriceAndRentalPriceForm = ({ onSubmit }) => {
  const [productPrice, setProductPrice] = useState('')
  const [productRentalPrice, setProductRentalPrice] = useState('')

  const handlePriceChange = (e) => {
    setProductPrice(e.target.value)
  }

  const handleRentalPriceChange = (e) => {
    setProductRentalPrice(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
      <button type='submit'>Next</button>
    </form>
  )
}

const CategoryForm = ({ onSubmit }) => {
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
        <input
          type='text'
          value={productCategory}
          onChange={handleCategoryChange}
        />
      </label>
    </form>
  )
}

const MyProducts = () => {
  const [showNameForm, setShowNameForm] = useState(false)
  const [productName, setProductName] = useState('')
  const [showPriceAndRentalForm, setShowPriceAndRentalForm] = useState(false)
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [showMainContent, setShowMainContent] = useState(true) // Track main content visibility
  const [newItemAdded, setNewItemAdded] = useState(false) // Track if a new item was added
  

  const handleAddButtonClick = () => {
    setShowNameForm(true)
    setShowMainContent(false) // Hide the main content when 'ADD' is clicked
    setNewItemAdded(false) // Reset the "new item added" state
  }

  const handleNameFormSubmit = (productName) => {
    // Save productName to state or context for later use
    // Show the next form (price and rental price)
    console.log('Product Name:', productName)
    setShowNameForm(false)
    setShowPriceAndRentalForm(true)
  }

  const handlePriceAndRentalFormSubmit = (productPrice, productRentalPrice) => {
    // Save productPrice and productRentalPrice to state or context for later use
    // Show the next form (category)
    console.log('Product Price:', productPrice)
    console.log('Product Rental Price:', productRentalPrice)
    setShowPriceAndRentalForm(false)
    setShowCategoryForm(true)
  }

  const handleCategoryFormSubmit = async (productCategory) => {
    // Save productCategory to state or context for later use
    // Send the collected data to the backend
    console.log('Product Category:', productCategory)
    // Uncomment the following block when you want to send data to the backend
    // try {
    //   const response = await axios.post('http://localhost:1337/name/myproducts/add', {
    //     name: productName,
    //     price: productPrice,
    //     rentalPrice: productRentalPrice,
    //     category: productCategory,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleCompleteButton = () => {
    // When 'Complete' button is clicked, show the main content again
    setShowMainContent(true)
    setNewItemAdded(true) // Set the "new item added" state
    setShowCategoryForm(false) // Hide the category form after completing
  }
  return (
    <div>
      {/* Render the message conditionally */}
      {newItemAdded ? (
        <>
          <h1>A new item was added</h1>
          <button onClick={handleAddButtonClick}>ADD</button>
        </> ) : (
        <>
          {/* Render the 'There is no item' line and 'ADD' button conditionally */}
          {showMainContent && (
            <>
              <h1>There is no item</h1>
              <button onClick={handleAddButtonClick}>ADD</button>
            </>
          )}

          {/* Render pop-up forms conditionally */}
          {showNameForm && <NameForm onSubmit={handleNameFormSubmit} />}
          {showPriceAndRentalForm && (
            <PriceAndRentalPriceForm
              onSubmit={handlePriceAndRentalFormSubmit}
            />
          )}
          {showCategoryForm && (
            <CategoryForm onSubmit={handleCategoryFormSubmit} />
          )}

          {/* Render 'Complete' button when on the last form */}
          {showCategoryForm && (
            <button onClick={handleCompleteButton}>Complete</button>
          )}
        </>
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
