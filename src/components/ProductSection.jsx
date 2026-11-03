
import Products from "../data/Products"
import ProductCard from "./ProductCard"

const ProductSection = ({ addToCart }) => {
    return (
        <section id="products" className="w-full px-4 sm:px-6 lg:px-8 py-8">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#101828]">
                    Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

                    {Products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}

                </div>

            </div>
        </section>
    )
}

export default ProductSection



