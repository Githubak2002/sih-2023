import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#192a36] text-white py-12">
      <h1 className="text-center text-3xl font-bold mb-8">VERYWELL MIND</h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Subscription Section */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Daily Tips for a Healthy Mind to Your Inbox</h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-4 lg:mb-0 lg:mr-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <button className="p-2 bg-blue-500 rounded hover:bg-blue-600">SIGN UP</button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <a href="#" className="block mb-2 hover:underline">Aim</a>
              <a href="#" className="block mb-2 hover:underline">Vision</a>
              <a href="#" className="block mb-2 hover:underline">Testimonials</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <a href="#" className="block mb-2 hover:underline">Writing</a>
              <a href="#" className="block mb-2 hover:underline">Internships</a>
              <a href="#" className="block mb-2 hover:underline">Coding</a>
              <a href="#" className="block mb-2 hover:underline">Teaching</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <a href="#" className="block mb-2 hover:underline">Uttar Pradesh</a>
              <a href="#" className="block mb-2 hover:underline">Ahmedabad</a>
              <a href="#" className="block mb-2 hover:underline">Indore</a>
              <a href="#" className="block mb-2 hover:underline">Mumbai</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <a href="#" className="flex items-center mb-2 hover:underline">
                <FaFacebookF className="mr-2" />
                Facebook
              </a>
              <a href="#" className="flex items-center mb-2 hover:underline">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
              <a href="#" className="flex items-center mb-2 hover:underline">
                <FaTwitter className="mr-2" />
                Twitter
              </a>
              <a href="#" className="flex items-center mb-2 hover:underline">
                <FaYoutube className="mr-2" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Dotdash Media, Inc. — All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
