import Products from "../data/Products"
import ProductCard from "./ProductCard"

const ProductSection = ({addToCart}) => {
  return (
    <section id="products" className="container mx-auto p-8">

      <h2 className="text-3xl font-bold text-[#101828] mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </section>
  )
}

export default ProductSection


