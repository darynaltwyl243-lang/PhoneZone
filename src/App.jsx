import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProductSection from "./components/ProductSection"
import Contact from "./components/Contact"
import { useEffect, useState } from "react"

function App() {

  const [cart, setCart] = useState([])
  const [message, setMessage] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity) => {

    setCart((prevCart) => {

      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { ...product, quantity }]
    })

    setMessage("Added Successfully!")
  }



  const cartCount = cart.length

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleCheckout = () => {

    if (cart.length === 0) return

    setCart([])
    setIsCartOpen(false)
    setMessage("Your order has been completed!")
  }


  useEffect(() => {

    if (message) {

      const timer = setTimeout(() => {
        setMessage("")
      }, 2500)

      return () => clearTimeout(timer)
    }

  }, [message])

  return (


    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full">
        <Navbar
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
        />
      </div>


      <div className="flex-1">
        <Hero />

        <ProductSection addToCart={addToCart} />

      </div>


     
      <Contact />

      <Footer />
      {message && (
        <div className="fixed top-24 right-5 z-[100] bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg text-2xl">
          {message}
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">


          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-9 max-h-[85vh] overflow-y-auto">

            <div className="flex justify-between items-center mb-7">
              <h2 className="text-4xl font-bold">Shopping Cart</h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="text-5xl text-gray-600"
              >
                ×
              </button>
            </div>

            <p className="text-gray-500 mb-8 text-2xl">
              Total Items: {cartCount}
            </p>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-9 border-b pb-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-60 h-60 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mx-5">{item.name}</h3>

                      <p className="text-gray-700 mx-5 mt-3 text-xl">
                        {item.quantity} × ${item.price}
                      </p>

                      <p className="text-blue-600 font-bold mx-5 mt-3 text-3xl">
                        ${item.quantity * item.price}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            )}

            <div className="border-t mt-6 pt-5">
              <div className="flex justify-between mb-6">
                <span className="font-bold text-3xl">Total:</span>
                <span className="font-bold text-2xl text-blue-600 text-3xl">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-2xl"
              >
                Checkout
              </button>
            </div>

          </div>
        </div>
      )}

    </div>

  )
}

export default App








