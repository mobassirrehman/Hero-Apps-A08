import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';
import { DNA } from 'react-loader-spinner';

const TopApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         setLoading(true);
          fetch('/appsData.json').then(res=> res.json()).then(data=> {
            const topEightApps = data.slice(0,8);
            setApps(topEightApps);
            setLoading(false);
           })
           .catch(error => {
               console.error('error loading apps:', error);
               setLoading(false);
           })
    },[]);

    if (loading){
        return(
            <div className='flex justify-center items-center py-15'>
                <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />

            </div>
        )
    }
    return (
       <section className='bg-[#fbf5fd] py-10 md:py-14'>
        <div className='max-w-11/13 mx-auto px-4'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl md:text-4xl text-gray-700 font-bold mb-4'>Trending Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    apps.map(app => (<AppCard key={app.id} app={app}></AppCard>))
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/apps'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white'>Show All</button>
                </Link>
            </div>
        </div>
       </section>
    );
};

export default TopApps;