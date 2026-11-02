import { ShoppingCart } from "lucide-react"

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-gray-950 text-white shadow-lg fixed w-full top-0 left-0">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">

    
        <h1 className="text-3xl tracking-wide font-bold">Phone<span className="text-blue-400">Zone</span>
        </h1>

    
        <ul className="flex items-center font-medium text-xl gap-10">
          <li>
            <a href="#home" className="relative group transition duration-300 hover:text-cyan-400">Home
              <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a href="#products" className="relative group transition duration-300 hover:text-cyan-400">Products
              <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a href="#contact" className="relative group transition duration-300 hover:text-cyan-400">Contact
              <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>




        <button
          onClick={onCartClick}
          className="relative text-white hover:text-blue-400 transition duration-300 cursor-pointer">
          <ShoppingCart
            size={35}
          />

          <span className="absolute text-white bg-blue-400 flex justify-center items-center text-xs -top-2 -right-2 rounded-full w-5 h-5">{cartCount}</span>
        </button>

      </div>

    </nav>
  )
}

export default Navbar
