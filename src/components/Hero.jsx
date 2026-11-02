import hero from "../assets/images/hero.png"
const Hero = () => {
    return (
        <section className="bg-gray-200 py-4">
            <div className="container py-10 flex justify-between items-center gap-2 px-4 mx-auto">
                <div className="max-w-lg">
                    <p className="font-semibold text-2xl mb-10 text-blue-600">WELCOME TO PHONEZONE</p>

                    <h1 className="text-[#101828] font-bold text-5xl leading-tight mb-6">Discover Your <span className="text-blue-600">Perfect Phone</span></h1>

                    <p className="text-gray-600 leading-8 mb-7">Explore the latest smartphones from top brands.
                        Find your perfect device at the best prices.</p>


                    <a href="#Products" className="bg-blue-600 text-white px-7 py-4 inline-block rounded-lg font-semibold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700">
                        Shop Now
                    </a>
                </div>

                <div>
                    <img 
                       src= {hero} 
                       alt="Smartphone" 
                       className="object-contain w-full max-w-md h-180"
                    />
                </div>
                
            </div>
        </section>
    )
}

export default Hero;
