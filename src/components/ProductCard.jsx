import { useState } from 'react'

const ProductCard = ({ product, addToCart }) => {

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart(product, quantity)
        setQuantity(1)
    }

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden flex flex-col h-full">

            <div className="p-3 flex justify-center bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 sm:h-48 md:h-52 w-full object-contain"
                />
            </div>

            <div className="p-3 sm:p-4 flex flex-col flex-1">

                <h2 className="text-base sm:text-lg font-bold text-[#101828] mb-2">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-500 mb-2 min-h-12">
                    {product.desc}
                </p>

                <p className="text-lg font-bold text-blue-700 my-2">
                    ${product.price}
                </p>

                <div className="flex justify-center items-center gap-5 mb-3">

                    <button
                        onClick={() => setQuantity(q => q - 1)}
                        disabled={quantity === 1}
                        className="bg-gray-600 w-7 h-7 rounded-lg text-lg text-white flex justify-center items-center disabled:opacity-50"
                    >
                        -
                    </button>

                    <span className="font-bold text-base">
                        {quantity}
                    </span>

                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="bg-blue-600 text-white w-7 h-7 rounded-lg text-lg flex justify-center items-center"
                    >
                        +
                    </button>

                </div>

                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white rounded-lg font-semibold px-4 py-2 hover:bg-blue-700 transition text-sm sm:text-base w-full mt-auto"
                >
                    Add To Cart
                </button>

            </div>
        </div>
    )
}

export default ProductCard



