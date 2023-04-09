import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {image ,price ,description,id,_id,  name}=service
    return (
     
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView className='w-96' src={image}>

          <img src={image} alt="Shoes" className="rounded-xl" />
          </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {name}</h2>
          <p>${price}</p>
          {/* <p> {description} </p> */}
          <div className="card-actions">
            <Link to={`/chekout/${_id}`}> 
            <button className="btn btn-primary">Buy Now</button>
            </Link>
            <Link to={`/review/${_id}`}> 
            <button className="btn btn-primary">add review</button>
            </Link>
            <Link to='/services' >

            <button className="btn btn-primary">Services</button>
            </Link>
            <Link to={`/services/${_id}`} >

            <button className="btn btn-primary">Service Details</button>
            </Link>
            
            
          </div>
        </div>
      </div>
      
    );
};

export default ServiceCard;