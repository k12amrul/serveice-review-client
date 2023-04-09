import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {

  const { logout, user, googleLogin } = useContext(AuthContext)


  const googleLoginProvider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    googleLogin(googleLoginProvider)
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(err => {
        console.error(err);
      })


  }

  const handleLogout = () => {
    logout()
      .then()
      .catch(err => {
        console.error(err)
      })

  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2">
               
              </ul>
            </li>
            {/* <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <h1>Al-Amin Cake</h1>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/services'}>Services</Link></li>


          {
            user?.uid ?
              <>
             
                <button onClick={handleLogout} className="btn btn-active">Logout</button>
                <li><Link to={'/showReviews'}>myReviews</Link></li>
                <li><Link to={'/addService'}>addService</Link></li>

                <h1>{user?.displayName}</h1>
              <img className='w-10' src={ user?.photoURL} alt="" />
              </>
              :
              <>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <button onClick={handleGoogleLogin} className="btn btn-active">google</button>

              </>

          }

          <>
          </>


        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  );
};

export default Header;