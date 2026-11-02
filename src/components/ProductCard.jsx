import { useState } from 'react'


const ProductCard = ({ product, addToCart }) => {

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart(product, quantity)
        setQuantity(1)
    } 

    return (
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl overflow-hidden'>

            <div className='p-6 flex justify-center bg-gray-50'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='h-80 w-full object-contain'
                />
            </div>

            <div className='p-5'>
                <h2 className='text-[#101828] font-bold text-3xl mb-2 py-3'>{product.name}</h2>

                <p className='text-2xl text-gray-500 mb-4 min-h-20'>{product.desc}</p>
                <p className='text-3xl font-bold text-blue-700 my-4'>${product.price}</p>

                <div className='flex justify-between items-center gap-5 mb-5 mx-20'>
                    <button
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity === 1}
                        className='my-6 bg-gray-600 w-9 h-9 rounded-lg text-3xl text-white flex justify-center items-center'
                    >
                        -
                    </button>

                    <span className='font-bold text-2xl'>
                        {quantity}
                    </span>

                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className='my-6 bg-blue-600 text-white w-9 h-9 rounded-lg text-3xl flex justify-center items-center'
                    >
                        +
                    </button>
                </div>

                <button onClick={handleAdd} className='bg-blue-600 text-white rounded-xl font-semibold px-6 py-4 transition duration-300 hover:bg-blue-700 text-xl w-full mt-auto'>
                    Add To Cart
                </button>

            </div>
        </div>

    )
}

export default ProductCard
