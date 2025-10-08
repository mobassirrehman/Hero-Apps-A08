import React from 'react';
import { Link } from 'react-router';
import { BiSolidDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const AppCard = ({app}) => {
        const {id, image, title, downloads, ratingAvg} = app;

        return (
            <Link to={`/app/${id}`}>
            <div className='card bg-base-100 shadow-sm hover:shadow-lg transition cursor-pointer'>
                <figure className='bg-gray-200 p-4'>
                    <img src={image} alt="" className='w-full h-48 object-cover rounded-lg' />
                </figure>
                <div className='card-body p-4'>
                    <h3 className='text-md font-medium'>{title}</h3>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-1 text-green-600'>
                            <BiSolidDownload className='w-4 h-4' />
                            <span className='text-sm font-medium'>{downloads}</span>
                        </div>
                        <div className='flex items-center text-orange-400 gap-1'>
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