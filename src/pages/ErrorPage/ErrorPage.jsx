import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/error-404.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-screen flex items-center justify-center'>
              <div className='text-center px-4'>
                <div>
                    <img src={errorImg} alt="" />
                </div>
                <h2 className='text-3xl md:text-4xl text-gray-600 font-bold mb-4'>
                    Oops, page not found!
                </h2>
                <p className='text-gray-500 text-lg mb-8'>
                    The page you are looking for is not available.
                </p>
                   <div className='text-center'>
                    <Link to='/'>
                    <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white'>
                        Go Back!
                        </button>
                    </Link>
                </div> 
            </div>
         </main>
         <Footer></Footer>
       </div>
        
    );
};

export default ErrorPage;

