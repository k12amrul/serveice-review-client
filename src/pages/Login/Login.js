import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

  const {user,createUser}=useContext(AuthContext)
     //  useTitle('Login')
  const handleLogin =event=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(   email ,password );
      
    
    createUser(email ,password)
    .then(result =>{
      const user=result.user
      console.log(user);
      // setUser(currentUser)
     // navigate(from ,{replace : true})
      
    })
    .catch(err => {
      console.error(err)
    })
}



    

  
    return (
        <div>
            <h1> Login</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>

            
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password'  type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary"  type="submit" value="login" />
          {/* <button className="btn btn-primary">Login</button> */}
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Login;