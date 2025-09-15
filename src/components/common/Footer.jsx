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
    <footer className="bg-secondary text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Features Menu */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
            Features Menu
          </h3>
          <ul className="space-y-3 text-lg">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Hire Developer</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
            <li><a href="#" className="hover:text-white">Who We Are</a></li>
          </ul>
        </div>

        {/* Service Menu */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
              Service Menu
            </h3>
            <ul className="space-y-3 text-lg">
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white">Game Development</a></li>
              <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white">Graphics Design</a></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-10 ml-15 text-lg">
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">DevOps</a></li>
              <li><a href="#" className="hover:text-white">E-Commerce</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">Cloud Computing</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-500 pb-2 mb-4 ">
            Contact Information
          </h3>
          <p className="mb-4 flex">
            <img src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg" className="self-baseline" alt="" />
            904, Skywalk The Elements, Jagatpur Rd, near BSNL Office,
            off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470
          </p>
          <p className="mb-4 flex">
            <img src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg" className="self-baseline" alt="" />1148 S Railroad Ave, Bronxville, New York 10708, USA
          </p>
          <p className="mb-4 flex">
            <img src="https://tecoreng.com/_next/static/media/mail.2f4cb1d7.svg" alt="" />
             sales@tecoreng.com</p>
          <div className="flex">
            <img src="https://tecoreng.com/_next/static/media/call-us.7874a07a.webp" alt="" />
            <p> HR: +91 63527 25452</p>
          </div>

          <p className="flex"><img src="https://tecoreng.com/_next/static/media/call-us.7874a07a.webp" alt="" /> Sales: +91 85117 46476</p>
     
        </div>
      </div>

      <div className="border-t border-white mt-10 py-6 flex flex-col md:flex-row items-center justify-between px-4">
  
        <div className="flex items-center space-x-3">
          <img
            src="https://tecoreng.com/_next/static/media/logo1.2795f947.svg"  // 🔥 Replace with your hosted logo path
            alt="Tecoreng Logo"
            className="h-15 w-auto ml-30"
          />
          <span className="text-white text-lg"></span>
        </div>

        <p className=" text-white mt-4 md:mt-0 text-lg">
          Copyright © 2025 by Tecoreng
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaBehance /></a>
          <a href="#" className="hover:text-white"><FaDribbble /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
