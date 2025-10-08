import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';

const TopApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         setLoading(true);
          fetch('/appData.json').then(res=> res.json()).then(data=> {
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
            <div>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        )
    }
    return (
       <section>
        <div>
            <div>
                <h2>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                {
                    apps.map(app => (<AppCard key={app.id} app={app}></AppCard>))
                }
            </div>
            <div>
                <Link to='/apps'>
                <button>Show All</button>
                </Link>
            </div>
        </div>
       </section>
    );
};

export default TopApps;