import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between bg-white">
      <div className="flex-shrink-0 flex-1">
        <h1 className="text-xl font-semibold">French Fry Features</h1>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-2 text-sm bg-gray-50 rounded-full p-1 px-2">
        <a
          href="/services"
          className="text-gray-600 hover:text-gray-900 hover:bg-white p-2 px-3 rounded-3xl transition-colors"
        >
          Services
        </a>
        <a
          href="/case-studies"
          className="text-gray-600 hover:text-gray-900 hover:bg-white p-2 px-3 rounded-3xl transition-colors"
        >
          Case Studies
        </a>
        <a
          href="/resources"
          className="text-gray-600 hover:text-gray-900 hover:bg-white p-2 px-3 rounded-3xl transition-colors"
        >
          Resources
        </a>
        <a
          href="/company"
          className="text-gray-600 hover:text-gray-900 hover:bg-white p-2 px-3 rounded-3xl transition-colors"
        >
          Company
        </a>
        <a
          href="/contact"
          className="text-gray-600 hover:text-gray-900 hover:bg-white p-2 px-3 rounded-3xl transition-colors"
        >
          Contact
        </a>
      </div>

      <button className="flex p-2 transition-colors flex-1 hover:bg-white p-2 px-3 justify-end">
        <Menu className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
