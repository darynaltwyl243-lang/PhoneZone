
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101828] mb-4">
            Contact Us
          </h2>

          <p className="text-gray-500 text-xl">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12">

    
          <div>
            <h3 className="font-bold text-[#101828] mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-500 mb-8">
              Feel free to contact us for any questions
              about our products or services.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={25} />
                <span>support@phonezone.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" size={25} />
                <span>+970 599 000 000</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={25} />
                <span>Palestine</span>
              </div>

            </div>
          </div>

    
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-600"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-600 resize-none"
            />

            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
