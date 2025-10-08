import React from 'react';
import { Link } from 'react-router';
import { BiSolidDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const AppCard = ({app}) => {
        const {id, image, title, downloads, ratingAvg} = app;

        return (
            <Link to={`/app/${id}`}>
            <div>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div>
                    <h3>{title}</h3>
                    <div>
                        <div>
                            <BiSolidDownload />
                            <span>{downloads}</span>
                        </div>
                        <div>
                        <FaStar />
                            <span>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default AppCard;