import React from 'react';
import Banner from '../Banner/Banner';
import StatesSection from '../StatesSection/StatesSection';
import TopApps from '../TopApps/TopApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatesSection></StatesSection>
            <TopApps></TopApps>
        </div>
    );
};

export default Home;