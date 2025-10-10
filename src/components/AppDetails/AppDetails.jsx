import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import appNotFoundImg from '../../assets/App-Error.png'
import { Link, useParams } from 'react-router';
import { BiSolidDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import 'react-toastify/dist/ReactToastify.css';
import { DNA } from 'react-loader-spinner';

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/appsData.json').then(res => res.json()).then(data => {
                const singleApp = data.find(app => app.id === parseInt(id));
                setApp(singleApp);

                const storedApps = localStorage.getItem('installedApps');
                if (storedApps) {
                    const installedApps = JSON.parse(storedApps);
                    const alreadyInstalled = installedApps.find(installed => installed.id === singleApp?.id);
                    if (alreadyInstalled) {
                        setIsInstalled(true);
                    }
                }
                setLoading(false);
            });
    }, [id]);

    const handleInstall = () => {
        const storedApps = localStorage.getItem('installedApps');
        let installedApps = storedApps ? JSON.parse(storedApps) : [];

        const alreadyInstalled = installedApps.find(installedApp => installedApp.id === app.id);

        if (alreadyInstalled) {
            toast.error('App Already Installed!');
            return;
        }
            installedApps.push(app);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
    
            setIsInstalled(true);
            toast.success('App Installed Successfully!');
    };

      if (loading){
            return(
                <div className='flex justify-center items-center min-h-screen py-15'>
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
    if (!app) {
        return (
            <div className='min-h-screen bg-[#fbf5fd] flex items-center justify-center'>
                <div className='text-center px-4'>
                    <div className='flex justify-center mb-8'>
                        <img src={appNotFoundImg} alt='App Not Found' className='w-full max-w-md' />
                    </div>
                    <h1 className='text-4xl font-bold mb-4'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-gray-600 mb-8'>
                        The App you are requesting is not found on our system. please try another apps
                    </p>
                    <div className='text-center pt-8'>
                    <Link to='/apps'>
                        <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white'>
                            Go Back!
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = app;
    const chartData = ratings.map(rating => ({
        name: rating.name,
        count: rating.count
    }));
    return (
        <div className='bg-[#fbf5fd] min-h-screen py-12'>
            <ToastContainer />
            <div className='max-w-11/13 mx-auto px-4'>
                <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                        <div className='w-full max-w-xs aspect-square'>
                            <img src={image} alt={title} className='w-full max-w-sm mx-auto lg:w-64 h-64 object-cover rounded-lg' />
                        </div>
                        </div>

                        <div className='flex-1'>
                            <h1 className='text-3xl text-gray-900 font-bold mb-2'>{title}</h1>
                            <p className='text-gray-600 mb-6'>
                                Developed by <span className='text-primary font-medium'>{companyName}</span>
                            </p>

                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6'>
                                <div className='text-center sm:text-left'>
                                    <div className='flex items-center justify-center sm:justify-start gap-2 mb-2'>
                                        <BiSolidDownload className='w-4 h-4 text-green-700' />
                                        <span className='text-gray-600'>Downloads</span>
                                    </div>
                                    <h3 className='text-3xl text-gray-900 font-bold'>{downloads}</h3>
                                </div>

                                <div className='text-center sm:text-left'>
                                    <div className='items-center flex justify-center sm:justify-start gap-2 mb-2'>
                                        <FaStar className='w-6 h-6  text-orange-400' />
                                        <span className='text-gray-600'>Average Ratings</span>
                                    </div>
                                    <h3 className='text-3xl text-gray-900 font-bold'>{ratingAvg}</h3>
                                </div>

                                <div className='text-center sm:text-left'>
                                    <div className='flex items-center justify-center sm:justify-start gap-2 mb-2'>
                                    <SlLike className='text-purple-600 text-xl' /> 
                                        <span className='text-gray-600'>Total Reviews</span>
                                    </div>
                                    <h3 className='text-3xl text-gray-900 font-bold'>{reviews}</h3>
                                </div>
                            </div>

                            <button 
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`btn ${isInstalled ? 'btn btn-success' : 'btn-primary'} text-white w-full sm:w-auto`}
                            >
                                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
                    <h2 className='text-gray-900 text-2xl font-bold mb-6'>Ratings</h2>
                    <ResponsiveContainer width='100%' height={300}>
                     <BarChart 
                       data={chartData}
                       layout='vertical'
                       margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                       <XAxis type='number'/>
                       <YAxis dataKey='name' type='category'/>
                       <Bar dataKey='count' fill='#FF8042'/>
                     </BarChart>
                   </ResponsiveContainer>
               </div>

                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <h2 className='text-2xl text-gray-900 font-bold mb-6'>Description</h2>
                    <p className='text-gray-600'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;