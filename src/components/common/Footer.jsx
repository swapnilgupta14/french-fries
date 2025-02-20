import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pt-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[90%] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-start w-[80%]">
            <h3 className="text-2xl font-semibold">Newsletter</h3>
            <p className="text-gray-600">
              Your shortcut to crafting your dream space hassle-free. It's
              customised, eco-friendly, installed in a flash, and built to last.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-1 rounded-md hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-20 text-right">
            {/* Navigation Links */}
            <div className="space-y-3 text-left">
              <Link
                href="/"
                className="block text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-600 hover:text-gray-900"
              >
                Portfolio
              </Link>
              <Link
                href="/news"
                className="block text-gray-600 hover:text-gray-900"
              >
                News & Publication
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-gray-900"
              >
                Get In Touch
              </Link>
            </div>

            <div className="space-y-3 text-left">
              <p className="text-gray-600">T: 7752865124</p>
              <p className="text-gray-600">info@frenchfryfeatures.com</p>
              <button className="border border-gray-500 bg-gray-100 px-4 py-1 rounded-md hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto border-t border-gray-200 pt-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-700 mb-4 md:mb-0"
          >
            Privacy Policy
          </Link>
          <div className="text-gray-400 text-sm order-first md:order-none mb-4 md:mb-0">
            © 2025 FFF. All rights reserved.
          </div>
        </div>
        <div className="text-4xl md:text-9xl mt-10 font-bold text-center bg-gradient-to-b from-gray-500 via-gray-300 to-gray-600 text-transparent bg-clip-text ">
          French Fry Features
        </div>
      </div>
    </div>
  );
};

export default Footer;
