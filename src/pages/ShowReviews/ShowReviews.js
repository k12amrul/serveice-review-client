import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewsRow from './ReviewsRow';

const ShowReviews = () => {
    const {user } =useContext(AuthContext)
    const [reviews  ,setReview]= useState([])       
    useEffect( ()  => {
        fetch(`https://assignment11-server-pi.vercel.app/reviews?email=${user?.email}`)
        .then( res => res.json())
        .then(data => setReview(data))

    }  ,[user?.email ])
    return (
        <div>
            <h1> ShowReviews {reviews.length} </h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        reviews.map( review => <ReviewsRow 
            // key={ review._id}
            review={review}
        > </ReviewsRow> )

    }
   
  
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default ShowReviews;