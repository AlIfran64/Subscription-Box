import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const login = useLocation();

  // get location
  const location = useLocation();

  // return to previous path
  const navigate = useNavigate();

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // get data from input
    const email = e.target.email.value;
    const password = e.target.password.value;


    // log in
    userLogin(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate(`${location.state ? location.state : '/'}`)
      toast.success("Login Successful!");
      // ...
    })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  return (
    <div>
      <Helmet>
        <title>FreshiKart{login.pathname}</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className=" flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className='font-bold text-2xl mb-5'>Log in!</h1>
              <form onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input type="email" name='email' className="input mb-4 w-full" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="font-bold text-gray-600">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>


                {/* Google login */}
                <button className="btn bg-white text-black border-[#e5e5e5] my-5 w-full">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>

                <button type='submit' className="btn bg-[#123524] text-white py-4 w-full">Login</button>

              </form>

              {/* go to register */}
              <p className='mt-2 text-center'>Didn't have an account? Please <Link to={'/Register'} className='font-semibold text-[#123524]'>Register.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;