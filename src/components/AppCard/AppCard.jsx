import React from 'react';
import { Link } from 'react-router';
import { BiSolidDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const AppCard = ({app}) => {
        const {id, image, title, downloads, ratingAvg} = app;

        return (
            <Link to={`/app/${id}`}>
            <div className='bg-[#fbf5fd] shadow-sm hover:shadow-lg transition-shadow h-full'>
                <figure className='aspect-square overflow-hidden'>
                    <img src={image} alt="" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                </figure>
                <div className='card-body p-4'>
                    <h3 className='text-md font-medium'>{title}</h3>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-1 bg-green-100 px-2 py-1 rouded-sm text-green-600'>
                            <BiSolidDownload className='w-4 h-4' />
                            <span className='text-sm font-medium'>{downloads}</span>
                        </div>
                        <div className='flex items-center text-orange-400 bg-orange-100 px-2 py-1 rounded-sm gap-1'>
                        <FaStar className='w-4 h-4' />
                            <span className='text-sm font-medium'>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default AppCard;