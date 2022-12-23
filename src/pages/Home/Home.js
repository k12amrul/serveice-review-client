import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {

    useTitle('Home')
    const [ services ,setServices]=useState()
    useEffect( ( ) => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
         .then( d => setServices(d))
    }, [])
    return (
        <div>
            <h1>Home</h1>
            
                {
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>{
                        services?.map( service =>  <ServiceCard
                        key={service.id}
                        service={service}
                        ></ServiceCard>)
                        
                        }
                    </div>
                }
            
            
        </div>
    );
};

export default Home;