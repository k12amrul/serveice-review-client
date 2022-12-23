import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services')
    const [ services ,setServices]=useState()
    useEffect( ( ) => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
         .then( d => setServices(d))
    }, [])
    return (
        <div>{
            <h1> Services Services {services?.length}</h1>
            
            }
            {
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>{
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


export default Services;