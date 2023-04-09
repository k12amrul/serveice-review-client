import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ReviewsRow from './ReviewsRow';

const ShowReviews = () => {
    const {user } =useContext(AuthContext)
    const [review  ,setReview]= useState([])       
    useEffect( ()  => {

        // fetch(`https://assignment11-server-pi.vercel.app/reviews?email=${user?.email}`)
        fetch(`${process.env.REACT_APP_API_URL}/reviews?email=${user?.email}`)
       // fetch(`${process.env.REACT_APP_API_URL}/reviews?email=${user?.emil}`)
       // fetch(`${process.env.REACT_APP_API_URL}
        .then( res => res.json())
        .then(data => setReview(data))

    }  ,[user?.email ])

    const  handleDeleteReview =(id) =>{
      console.log(id)
      fetch(`${process.env.REACT_APP_API_URL}/review/${id}`,{
          method : 'DELETE',
      })
      .then( res => res.json())
      .then(data =>   {
          console.log(data)
          if(data?.acknowledged){
             alert('delete success')
             

          }
          
      
      })

     }
    return (
      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
           
            <th>Reviewer Information</th>
            <th>Product Name</th>
            <th>Review details</th>
            <th> image</th>
            <th>  delete</th>
           
            {/* <th></th> */}
          </tr>
        </thead>
        {
             review?.map( rev => 
                <tbody>
                {/* row 1 */}
                <tr>
                  
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={rev?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div> <h1>{ user?.displayName}</h1></div>
                      <div>
                        <div className="font-bold"></div>
                        {
                          user?.uid ?
                          <div className="text-sm opacity-50">{rev.email} </div>
                      :  <Link to={"/login"}> <button  > Login</button>  </Link>
                        }
                      </div>
                    </div>
                  </td>
                  <td>
                 
                  
                    <br/>
                    <span className="badge badge-ghost badge-sm"> { rev.name}</span>
                  </td>
                  <td>
                  {rev.message }
                  </td>
                  <th>
                    {
                      <img  className='w-12' src={ rev.reviewImage} alt="" />
                    }
                    {/* <button className="btn btn-ghost btn-xs">details</button> */}
                  </th>
                  <td>
                  <td><button onClick={ () =>handleDeleteReview(rev?._id)}>delete</button></td>
                  </td>
                </tr>
                {/* row 2 */}
            
             
              </tbody> 
                
                ) 
        }
    
    
     
        {/* foot */}
      
        
      </table>
    </div>
    );
};

export default ShowReviews;