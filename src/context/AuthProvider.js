
import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

  export const AuthContext =createContext()
  const auth =getAuth(app)
// const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading ,setloading ] =useState(true)




    const googleLogin =(provider) =>{
        setloading(true)
        return signInWithPopup(auth, provider)

    }
    // const githubLogin =( githubProvider) =>{
    //       setloading(true)
    //       return signInWithPopup (auth , githubProvider)
    // }
    const logout = () =>{
        setloading(true)
        return signOut(auth)
    }
    const createUser=(email ,password )=> {
        setloading(true)
        return createUserWithEmailAndPassword(auth ,email, password)
    }
    const signin =(email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword( auth, email,password)
    }
    const updateUserProfile= (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    useEffect(  () =>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setloading(false)
       })
       return () =>{
           unsubscribe()    
    } 
    },[])


    const authInfo={
        user,
         loading,
         updateUserProfile,
          signin,
        //   courseDetails,
            //   githubLogin,
            googleLogin,
            logout ,
            createUser   }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;









// import React, { createContext } from 'react';

//   export const AuthContext =createContext()
// const AuthProvider = ({children}) => {

//     const authInfo={

//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
