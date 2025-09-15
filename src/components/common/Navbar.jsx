import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-[#0a1a33] text-white shadow-md">
      <nav className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://tecoreng.com/_next/static/media/logo1.2795f947.svg"
            alt="Tecoreng Logo"
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-[17px] font-medium">
          <li>
            <a href="#" className="hover:text-orange-400">
              Services
            </a>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="hover:text-orange-400 flex items-center"
            >
              About Us ▾
            </button>
            {aboutOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Industries We Serve
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-orange-400">
              Career
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              Blog
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#"
            className="border border-white rounded-3xl py-2 px-4 hover:bg-orange-600 transition"
          >
            Hire Developers
          </a>
          <a
            href="#"
            className="rounded-3xl py-2 px-6 bg-gradient-to-r from-[#f1a488] to-[#fb6a53] hover:from-[#ec916d] hover:to-[#e28a7f] text-white "
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setAboutOpen(false);
            }}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1a33] px-6 py-4 space-y-3 text-base">
          <a
            href="#"
            onClick={handleLinkClick}
            className="block py-2 hover:text-orange-400"
          >
            Services
          </a>

          {/* About Us Dropdown Mobile */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full py-2 hover:text-orange-400"
            >
              About Us ▾
            </button>
            {aboutOpen && (
              <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                <li>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block hover:text-orange-400"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block hover:text-orange-400"
                  >
                    Industries We Serve
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="#"
            onClick={handleLinkClick}
            className="block py-2 hover:text-orange-400"
          >
            Career
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="block py-2 hover:text-orange-400"
          >
            Portfolio
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="block py-2 hover:text-orange-400"
          >
            Blog
          </a>

          {/* Mobile CTA Buttons */}
          <div className="pt-3 space-y-3">
            <a
              href="#"
              onClick={handleLinkClick}
              className="block border border-white rounded-2xl py-2 px-4 text-center hover:bg-orange-600 transition"
            >
              Hire Developers
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block rounded-2xl py-2 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-center hover:opacity-90 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
