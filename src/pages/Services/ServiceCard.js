import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {image ,price,id,_id,  name}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> { id}{name}</h2>
          <p>${price}</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={`/chekout/${_id}`}> 
            <button className="btn btn-primary">Buy Now</button>
            </Link>
            <Link to={`/review/${_id}`}> 
            <button className="btn btn-primary">add review</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;