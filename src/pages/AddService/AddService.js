
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
    const {user} =useContext(AuthContext)

    const handleAddService = event => {
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const price=form.price.value
        const id=form.id.value
        const email= form.email.value
        const message =form.message.value

        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then( imageData =>{
         console.log( imageData.data.display_url)
         const service ={
            
            id,
            email,
            image:imageData.data.display_url,
            message,
            name,
            price
        }
        fetch(`${process.env.REACT_APP_API_URL}/addService`,{
            method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(service),
           
        })
        .then(res => res.json())
        .then(data =>  {
            console.log( data);
            if(data.acknowledged){
                alert(' service sucsses ')
                form.reset()
            }
        })
        .catch( err => {
            console.error(err)
        })

        }
         )



    }
    return (
        <div>
            

<form  onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg: grid-cols-2'>
                <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            {/* <input type="file" name='image' placeholder="image" className="input input-bordered w-full max-w-xs" /> */}
            <input type="text" name='name' placeholder=" Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='price' placeholder="your price" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='id' placeholder=" id" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='email' placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
            
                </div>
                <textarea name='message'  className="textarea textarea-warning w-full " placeholder="message"></textarea>
                <button type='submit' className="btn btn-active btn-ghost">AddService</button>
                 {/* <input type="submit" value=" AddService" /> */}
           </form>
            
        </div>
    );
};


export default AddService;












// import React from 'react';

// const AddService = () => {

//     const hndleAddService = event => {
//         event.preventDefault()
//         const form=event.target
//         const pic =
//         const  customarName =` ${form.firstName.value}  ${form.lastName.value} `
//         const phone=form.phone.value
//         const email= form.email.value
//         const message =form.message.value
//         // console.log(name);
//         const review ={
//             phone,
//             customarName,
//             message,
//         }
//         fetch('https://assignment11-server-pi.vercel.app/addService' , {
//             method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(review),
           
//         })
//         .then(res => res.json())
//         .then(data =>  {
//             console.log( data);
//             if(data.acknowledged){
//                 alert('review sucsses ')
//                 form.reset()
//             }
//         })
//         .catch( err => {
//             console.error(err)
//         })

//     }

//     return (
//         <div>
//         <h1>  AddService  </h1>
//         <form  onSubmit={hndleAddService}>
//             <div className='grid grid-cols-1 lg: grid-cols-2'>
//         <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full max-w-xs" />
//         <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
//         <input type="text" name='phone' placeholder="your Phone" className="input input-bordered w-full max-w-xs" />
//         <input type="text" name='email' placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
       
//             </div>
//             <textarea name='message'  className="textarea textarea-warning w-full " placeholder="message"></textarea>
//              <input type="submit" value=" your review " />
//        </form>
//     </div>
//     );
// };

// export default AddService;