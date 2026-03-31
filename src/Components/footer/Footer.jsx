import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 px-10 pt-16 pb-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="col-span-2">
          <h2 className="text-white text-2xl font-bold mb-3">DigiTools</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h6 className="text-white font-semibold mb-4">Product</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-white font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h6 className="text-white font-semibold mb-4">Resources</h6>
          <ul className="space-y-2 text-sm mb-6">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* Social Icons */}
          <div>
            <h6 className="text-white font-semibold mb-3">Social Links</h6>
            <div className="flex gap-3">
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaYoutube />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;