
import hero from "../assets/images/hero.png"

const Hero = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row justify-center items-center gap-10">

        <div className="max-w-md">
          <p className="font-semibold text-base mb-6 text-blue-600">
            WELCOME TO PHONEZONE
          </p>

          <h1 className="text-[#101828] font-bold text-3xl leading-tight mb-5">
            Discover Your{" "}
            <span className="text-blue-600">Perfect Phone</span>
          </h1>

          <p className="text-gray-600 leading-7 mb-6">
            Explore the latest smartphones from top brands.
            Find your perfect device at the best prices.
          </p>

          <a
            href="#products"
            className="bg-blue-600 text-white px-7 py-3 inline-block rounded-lg font-semibold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>

        <div className="w-full max-w-md">
          <img
            src={hero}
            alt="Smartphone"
            className="object-contain w-full h-72"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero

