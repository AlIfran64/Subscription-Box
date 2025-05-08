import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

const MyProfile = () => {
  const { user, userUpdate, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const location = useLocation();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await userUpdate({ displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL });
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Helmet>
        <title>FreshiKart{location.pathname}</title>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#123524] mb-2">Welcome, {user?.displayName}</h1>
          <p className="text-gray-600">Manage your profile information</p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#123524] shadow-md"
          />
          <p className="mt-3 text-gray-700 text-sm">
            <strong>Email:</strong> {user?.email}
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input input-bordered w-full border-gray-300 rounded-md shadow-sm focus:ring-[#123524] focus:border-[#123524]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              className="input input-bordered w-full border-gray-300 rounded-md shadow-sm focus:ring-[#123524] focus:border-[#123524]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 text-white bg-[#123524] rounded-md hover:bg-[#0f2d1f] font-semibold transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
