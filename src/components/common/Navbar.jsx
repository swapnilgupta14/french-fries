import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between bg-white">
      <div className="flex-shrink-0 flex-1">
        <h1 className="text-xl font-semibold">French Fry Features</h1>
      </div>

      <div className="hidden md:flex items-center gap-8 flex-2 text-sm hover:bg-gray-100 rounded-full p-2 px-4">
        <a
          href="/services"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Services
        </a>
        <a
          href="/case-studies"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Case Studies
        </a>
        <a
          href="/resources"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Resources
        </a>
        <a
          href="/company"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Company
        </a>
        <a
          href="/contact"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Contact
        </a>
      </div>

      <button className="flex p-2 hover:bg-gray-100 rounded-full transition-colors flex-1 justify-end">
        <Menu className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
