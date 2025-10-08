import React from 'react';
import bannerImg from '../../assets/hero.png';

const Banner = () => {
    return (
<section>
<div className="hero">
  <div className="hero-content text-center py-12 md:py-16">
    <div className="">
      <h1 className="text-5xl font-bold">We Build <br />
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
      <p className="text-gray-600 text-base md:text-lg py-8">
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<span className="hidden lg:inline"><br /></span> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    <div className='flex justify-center gap-x-4'>
    <a  href="https://play.google.com/store" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-outline btn-primary gap-2">
         Google Play
    </a>
    <a href="https://www.apple.com/app-store/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-outline btn-primary gap-2">
        App Store
    </a>
    </div>
    </div>
  </div>
</div>
  <div className="flex-1 flex justify-center">
  <img 
      src={bannerImg} 
      alt="" 
      className="w-full max-w-md md:max-w-xl lg:max-w-2xl"
  />
</div>   
</section>         
        
    );
};

export default Banner;

