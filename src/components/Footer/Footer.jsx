import React from "react";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="max-w-11/13 mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
            <img className="w-8 h-8" src={logoImg} alt="" />
              <span className="text-xl font-bold">HERO.IO</span>
            </div>
            <p className="text-gray-400 text-sm">
              Explore trending apps developed by us. Making productivity easier
              for everyone.
            </p>
          </div>

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