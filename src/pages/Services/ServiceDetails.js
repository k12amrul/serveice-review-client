import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ServiceDetails = () => {

    const {user } =useContext(AuthContext)
      const [review ,setReview ] =useState( [])
      const ServiceDetails = useLoaderData()
      // const {image ,price,id,_id,  name}=service
      const {price ,name ,description,image ,_id } =ServiceDetails
  
     
      useEffect(  ( ) => { 
          fetch(`${process.env.REACT_APP_API_URL}/review/${_id}`)
             .then( res  => res.json( ))
             .then( data =>setReview( data) )
      },[_id])
      return (
          <div>
              <div className="card w-[100] bg-base-100 shadow-xl">
    <figure><img  className=' ' src={ image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div>
  {
  <h1> { review.length}</h1>
   
  
  }
  {
      
          <div className="overflow-x-auto w-full">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
         
          <th>Reviewer Information</th>
          <th>Product Name</th>
          <th>Review details</th>
          <th> image</th>
         
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
              </tr>
              {/* row 2 */}
          
           
            </tbody> 
              
              ) 
      }
  
  
   
      {/* foot */}
    
      
    </table>
  </div>
      
  }
  
          </div>
      );
  };
  
  export default ServiceDetails;