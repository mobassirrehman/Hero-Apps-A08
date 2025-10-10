import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import { DNA } from 'react-loader-spinner';

const Root = () => {
  const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
      <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-1'>
              {isLoading ? (
                  <div className='flex justify-center items-center min-h-screen'>
                      <DNA
                          visible={true}
                          height="100"
                          width="100"
                          ariaLabel="dna-loading"
                          wrapperStyle={{}}
                          wrapperClass="dna-wrapper"
                          colors={['#632EE3', '#9F62F2']}
                      />
                  </div>
              ) : (
                  <Outlet />
              )}
          </main>
          <Footer />
      </div>
  );
};

export default Root;