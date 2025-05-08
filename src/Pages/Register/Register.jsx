import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {



  const { userRegister, setUser, userUpdate, googleLogin } = useContext(AuthContext);
  const register = useLocation();


  const navigate = useNavigate();


  // handle register
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!uppercaseRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    // Proceed with registration
    userRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Registration Completed!");

        userUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
            toast.success('Profile updated!');
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  // handle google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const email = user.email;

        // Set full user object in context
        setUser({
          ...user,
          displayName,
          email,
          photoURL,
        });

        toast.success("Google Login Successful!");
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };



  return (
    <div>
      <Helmet>
        <title>FreshiKart{register.pathname}</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className=" flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className='font-bold text-2xl mb-5'>Please Register</h1>

              <form onSubmit={handleRegister}>
                <label className="label">Name</label>
                <input type="text" name='name' className="input mb-4 w-full" placeholder="Name" />
                <label className="label">Photo URL</label>
                <input type="text" name='photo' className="input mb-4 w-full" placeholder="Photo URL" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input mb-4 w-full" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />


                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="font-bold text-gray-600">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>


                {/* Google login */}
                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] my-5 w-full">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>

                <button type='submit' className="btn bg-[#123524] text-white py-4 w-full">Register</button>

              </form>

              {/* go to register */}
              <p className='mt-2 text-center'>Already have an account? Please <Link to={'/Login'} className='font-semibold text-[#123524]'>Login.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;