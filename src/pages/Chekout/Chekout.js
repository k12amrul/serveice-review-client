import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chekout = () => {
    const { name}=useLoaderData()

    return (
        <div>
            <h1> Chekout {name}</h1>
        </div>
    );
};

export default Chekout;