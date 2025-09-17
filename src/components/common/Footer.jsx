import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Features Menu */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
            Features Menu
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hire Developer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Who We Are
              </a>
            </li>
          </ul>
        </div>

        {/* Service Menu */}
        <div className="sm:col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
              Service Menu
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Game Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Graphics Design
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:mt-8 md:mt-10 text-sm sm:text-base">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  DevOps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
            Contact Information
          </h3>
          <p className="mb-4 flex gap-2 text-sm sm:text-base">
            <img
              src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg"
              className="self-start"
              alt=""
            />
            904, Skywalk The Elements, Jagatpur Rd, near BSNL Office, off
            Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470
          </p>
          <p className="mb-4 flex gap-2 text-sm sm:text-base">
            <img
              src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg"
              className="self-start"
              alt=""
            />
            1148 S Railroad Ave, Bronxville, New York 10708, USA
          </p>
          <p className="mb-4 flex gap-2 text-sm sm:text-base">
            <img
              src="https://tecoreng.com/_next/static/media/mail.2f4cb1d7.svg"
              alt=""
            />
            sales@tecoreng.com
          </p>
          <div className="flex gap-2 mb-2 text-sm sm:text-base">
            <img
              src="https://tecoreng.com/_next/static/media/call-us.7874a07a.webp"
              alt=""
            />
            <p>HR: +91 63527 25452</p>
          </div>
          <p className="flex gap-2 text-sm sm:text-base">
            <img
              src="https://tecoreng.com/_next/static/media/call-us.7874a07a.webp"
              alt=""
            />
            Sales: +91 85117 46476
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white mt-10 py-6 flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://tecoreng.com/_next/static/media/logo1.2795f947.svg"
            alt="Tecoreng Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base text-white text-center md:text-left">
          © 2025 Tecoreng. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-3 text-lg sm:text-xl">
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaBehance />
          </a>
          <a href="#" className="hover:text-white">
            <FaDribbble />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
