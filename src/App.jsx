import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Rout from './pages/Rout'
import Footer from './components/Footer'
import productDetails from './hooks/productdetail'
import { useState } from 'react'
function App() {
  const [product, setProduct] = useState(productDetails)
  const [detail, setDetail] = useState([])
  const [close, setClose] = useState(false)
  const [cart, setCart] = useState([])
  const searchbtn = (product) => {
    const change = productDetails.filter((item) => {
      return item.cat === product
    })
    setProduct(change)
  }
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }

  const addtocart = (product) => {
    const exist = cart.find((item) => {
      return item.id === product.id
    })
    if (exist) {
      alert("This Product is already added to cart")
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      // alert("Product is added to cart")
    }

  }
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar
          cart = {cart}
          searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
