import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { user } = useContext(ShopContext); 

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center">
        <div className="relative">
          <img
            src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1745180411.jpg'
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
      <div className="text-center mt-4">
      <h1 className="text-2xl font-bold">{user?.name}</h1>
      <h1 className="text-2xl font-bold">{user?.lastName}</h1>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* User Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800">Account Details</h2>
          <ul className="mt-2 text-gray-600">
            <li>
              <strong>Phone:</strong> {user?.phone || 'Not provided'}
            </li>
            <li>
              <strong>Address:</strong> {user?.address || 'Not provided'}
            </li>
          
          </ul>
        </div>
    </div>
</div>
      
    

  );
};

export default Profile;
