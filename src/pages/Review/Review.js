import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Review = () => {
    const {user} =useContext(AuthContext)
    const {_id, name ,price}=useLoaderData()

     const hndleReview = event => {
        event.preventDefault()
        const form=event.target
        const  customarName =` ${form.firstName.value}  ${form.lastName.value} `
        const phone=form.phone.value
        const email= form.email.value
        const message =form.message.value
        // console.log(name);
        const review ={
            serviceId :_id,
            price,
            name,
            email,
            phone,
            customarName,
            message,
        }
        fetch('https://assignment11-server-pi.vercel.app/reviews' , {
            method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(review),
           
        })
        .then(res => res.json())
        .then(data =>  {
            console.log( data);
            if(data.acknowledged){
                alert('review sucsses ')
                form.reset()
            }
        })
        .catch( err => {
            console.error(err)
        })

    }
    return (
        <div>
            <h1> Review Review {name}</h1>
            <h4>  price {price} </h4>
            <h6> { _id}</h6>
            <form  onSubmit={hndleReview}>
                <div className='grid grid-cols-1 lg: grid-cols-2'>
            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="your Phone" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='email' placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
           
                </div>
                <textarea name='message'  className="textarea textarea-warning w-full " placeholder="message"></textarea>
                 <input type="submit" value=" your review " />
           </form>
        </div>
    );
};

export default Review;