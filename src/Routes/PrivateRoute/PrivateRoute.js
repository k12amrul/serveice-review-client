import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location=useLocation()
    if(loading){
        <div>
            <h1> Loading</h1>
        </div>
    }



    if(!user ){
        return <Navigate to='/login' state={{form:location}} replace></Navigate>
    }return children
    // return (
    //     <div>

            
    //     </div>
    // );
};

export default PrivateRoute;