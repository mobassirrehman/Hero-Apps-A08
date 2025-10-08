import React from "react";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
            <img src={logoImg} alt="" />
              </svg>
              <span className="text-xl font-bold">HERO.IO</span>
            </div>
            <p className="text-gray-400 text-sm">
              Explore trending apps developed by us. Making productivity easier
              for everyone.
            </p>
          </div>

          {/* Social Links */}
          <div className="">
            <h6 className="font-semibold mb-4">Social Links</h6>
            <div className="flex gap-4">
        
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;