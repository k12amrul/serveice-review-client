import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ReviewsRow = ({ review }) => {
    const {serviceReview , setServiceReview }=useState({}) 
    const { price, customarName, serviceId, name, email,
        phone, } = review
        

        useEffect(    () => {
            fetch()
        },[])
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customarName}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
               {name}
                <br />
                <span className="badge badge-ghost badge-sm"> {price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewsRow;