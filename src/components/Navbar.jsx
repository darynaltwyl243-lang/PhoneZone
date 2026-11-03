
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"

const Navbar = ({ cartCount, onCartClick }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-3 left-0 w-full px-4 z-50">

      <div className="container mx-auto bg-gray-950 text-white shadow-lg rounded-2xl">

        <div className="px-5 sm:px-8 py-3 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl tracking-wide font-bold">
            Phone<span className="text-blue-400">Zone</span>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center font-medium text-[15px] gap-10">
            <li>
              <a href="#home" className="relative group transition duration-300 hover:text-cyan-400">
                Home
                <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a href="#products" className="relative group transition duration-300 hover:text-cyan-400">
                Products
                <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a href="#contact" className="relative group transition duration-300 hover:text-cyan-400">
                Contact
                <span className="absolute w-0 h-0.5 left-0 bg-cyan-400 -bottom-2 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Cart and Menu */}
          <div className="flex items-center gap-5">

            <button
              onClick={onCartClick}
              className="relative text-white hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              <ShoppingCart size={25} />

              <span className="absolute text-white bg-blue-400 flex justify-center items-center text-xs -top-2 -right-2 rounded-full w-5 h-5">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

          </div>
        </div>

        {/* Mobile Links */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 px-5 py-4">
            <ul className="flex flex-col gap-5 font-medium text-[15px]">
              <li>
                <a href="#home" onClick={closeMenu} className="block hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" onClick={closeMenu} className="block hover:text-cyan-400 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#contact" onClick={closeMenu} className="block hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
