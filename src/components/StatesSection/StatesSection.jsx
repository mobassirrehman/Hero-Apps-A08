import React from 'react';

const StatesSection = () => {
    return (
        <section className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-8 md:py-12'>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold opacity-80 text-center text-white mb-8'>
                Trusted By Millions, Built For You
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
    
                <div className='text-center text-white'>
                    <p className='text-sm font-medium mb-2 opacity-70'>Total Downloads</p>
                    <h3 className='text-5xl md:text-6xl opacity-80 font-bold mb-2'>29.6M</h3>
                    <p className='text-sm opacity-70'>21% More Than Last Month</p>
                </div>
    
                <div className='text-center text-white'>
                    <p className='text-sm font-medium mb-2 opacity-70'>Total Reviews</p>
                    <h3 className='text-5xl md:text-6xl  opacity-80 font-bold mb-2'>906K</h3>
                    <p className='text-sm opacity-70'>46% More Than Last Month</p>
                </div>
    
                <div className='text-center text-white'>
                    <p className='text-sm font-medium mb-2 opacity-70'>Active Apps</p>
                    <h3 className='text-5xl md:text-6xl  opacity-80 font-bold mb-2'>132+</h3>
                    <p className='text-sm opacity-70'>31 More Will Launch</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default StatesSection;