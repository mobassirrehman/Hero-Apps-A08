import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DNA } from 'react-loader-spinner';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadInstalledApps();
    }, []);

    const loadInstalledApps = () => {
        setLoading(true);
        const storedApps = localStorage.getItem('installedApps');
        if (storedApps) {
            const apps = JSON.parse(storedApps);
            setInstalledApps(apps);
        }
        setLoading(false);
    };

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        toast.success('App Uninstalled Successfully!');
    };

    const parseDownloads = (downloadStr) => {
        if (typeof downloadStr === 'number') return downloadStr;
        
        const str = downloadStr.toString().toUpperCase();
        if (str.includes('M')) {
            return parseFloat(str.replace('M', '')) * 1000000;
        } else if (str.includes('K')) {
            return parseFloat(str.replace('K', '')) * 1000;
        }
        return parseFloat(str);
    };

    const handleSort = (order) => {
        const sortedApps = [...installedApps].sort((a, b) => {
            const aDownloads = parseDownloads(a.downloads);
            const bDownloads = parseDownloads(b.downloads);
            
            if(order === 'high-low') {
                return bDownloads - aDownloads;
            } else if (order === 'low-high') {
                return aDownloads - bDownloads;
            }
            return 0;
        });
        
        setInstalledApps(sortedApps);
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
            <ToastContainer />
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-10'>
                    <h1 className='text-gray-900 text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-gray-600'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
                    <h3 className='text-xl text-gray-900 font-bold'>{installedApps.length} Apps Found</h3>

                    <div className='dropdown dropdown-end'>
                        <div tabIndex={0} role='button' className='btn btn-outline text-gray-900'>
                            Sort By Size
                        </div>
                        <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow'>
                            <li><a onClick={() => handleSort('high-low')}>High-Low</a></li>
                            <li><a onClick={() => handleSort('low-high')}>Low-High</a></li>
                        </ul>
                    </div>
                </div>

                {installedApps.length > 0 ? (
                    <div className='space-y-4'>
                        {installedApps.map(app => (
                            <div key={app.id} className='bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-center gap-4'>
                              <div className='w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0'>
                              <img 
                                    src={app.image} 
                                    alt={app.title} 
                                    className='w-full h-full object-cover rounded-lg'
                                />
                              </div>

                                <div className='flex-1 text-center sm:text-left'>
                                    <h3 className='text-md font-medium text-gray-900 mb-2'>{app.title}</h3>
                                    <div className='flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm'>
                                        <div className='flex items-center gap-1 text-green-600'>
                                            <FaDownload />
                                            <span>{app.downloads}</span>
                                        </div>
                                        <div className='flex items-center gap-1 text-yellow-500'>
                                            <FaStar />
                                            <span>{app.ratingAvg}</span>
                                        </div>
                                        <span className='text-gray-600'>{app.size} MB</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleUninstall(app.id)}
                                    className='btn btn-success text-white'
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-20'>
                        <h3 className='text-2xl font-bold text-gray-600 mb-2'>No Installed Apps</h3>
                        <p className='text-gray-500'>Install some apps to see them here</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;