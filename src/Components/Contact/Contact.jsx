import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-yellow-200 to-red-300 flex flex-col items-center p-8">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(../src/assets/16.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-900 to-black opacity-60"></div>
        </div>
        <div className="relative p-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 mb-8">
            We’re excited to hear from you! Whether you have a question or wish to discuss your special day, feel free to reach out.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-red-300 rounded-lg px-4 py-3
                     placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                    placeholder="Your Name" 
                  />
                  <label className="absolute top-3 left-4 text-gray-500 text-sm"></label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-red-300 rounded-lg px-4 py-3 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                    placeholder="Your Email" 
                  />
                  <label className="absolute top-3 left-4 text-gray-500 text-sm"></label>
                </div>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full border border-red-300 rounded-lg px-4 py-3 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                    placeholder="Your Message"
                  />
                  <label className="absolute top-3 left-4 text-gray-500 text-sm"></label>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-red-600 hover:to-yellow-600 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-red-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-red-800">Contact Details</h2>
              <p className="mb-4 text-gray-700">
                <span className="font-semibold text-gray-900">Email:</span> info@example.com
              </p>
              <p className="mb-4 text-gray-700">
                <span className="font-semibold text-gray-900">Phone:</span> +123 456 7890
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Address:</span> 123 Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
