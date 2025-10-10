import React, { useEffect, useState } from 'react';
import AppCard from '../AppCard/AppCard';
import NoApp from '../../assets/App-Error.png'
import { Link } from 'react-router';
import { DNA } from 'react-loader-spinner';


const Apps = () => {
    const [allApps, setAllApps] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/appsData.json').then(res => res.json()).then(data => {
                setAllApps(data);
                setFilteredApps(data);
                setLoading(false);
            });
    }, []);
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        const filtered = allApps.filter(app => 
            app.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredApps(filtered);
    };
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
        <div className='bg-[#fbf5fd] min-h-screen py-12'>
            <div className='max-w-11/13 mx-auto px-4'>
                <div className='text-center mb-10'>
                    <h2 className='text-3xl font-bold mb-4'>Our All Applications</h2>
                    <p className='text-gray-600'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
                    <h3 className='text-xl font-bold'>({filteredApps.length}) Apps Found</h3>
                    <label className='input input-bordered flex items-center gap-2 w-full md:w-auto'>
                        <svg className='h-[1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='2.5' fill='none' stroke='currentColor'>
                                <circle cx='11' cy='11' r='8'></circle>
                                <path d='m21 21-4.3-4.3'></path>
                            </g>
                        </svg>
                        <input 
                            type='search' 
                            placeholder='Search Apps'
                            value={searchText}
                            onChange={handleSearch}
                        />
                    </label>
                </div>

                {filteredApps.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            filteredApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div>
                ) : (
                    <div className='text-center items-center py-16'>
                       <div className='flex justify-center mb-8'>
                       <img src={NoApp} alt="" className='' />
                       </div>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-600 mb-2'>OPPS!! APP NOT FOUND</h3>
                        <p className='text-gray-500'>The App you are requesting is not found on our system. please try another apps</p>
                    </div>
                )}
                  <div className='text-center pt-8'>
                    <Link to='/'>
                        <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white'>
                            Go Back!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Apps;