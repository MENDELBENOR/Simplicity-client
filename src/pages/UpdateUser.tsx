import React, { useState } from 'react';
import { IUser, UserUpdate } from '../utils/types';
import { validFirstName, validLastName, validPhone } from '../utils/helper';
import InputField from '../components/InputField';  // Import the new InputField component
import { updateUser } from '../hooks/UseUsers';

type Prop = {
  setPopUpdateUser: (value: React.SetStateAction<boolean>) => void;
  data: IUser;
}
const UpdateUser = ({ setPopUpdateUser, data }: Prop) => {

  console.log(data);


  const [user, setUser] = useState<UserUpdate>({
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    _id: data._id
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validFirstName(user.firstName) || !validLastName(user.lastName) || !validPhone(user.phone)) return;

    setPopUpdateUser(false)


    // function to sand update user
    updateUser(user)
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-black bg-opacity-50 p-4 absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 relative">
        <div
          className="absolute top-0 right-0 m-2 p-1 rounded-full bg-red-700 text-white cursor-pointer"
          onClick={() => { setPopUpdateUser(false) }}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Update User</h1>

        <div className="mb-4">
          <InputField
            id="firstName"
            label="First Name"
            type="text"
            value={user.firstName}
            placeholder="First name"
            isValid={validFirstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <InputField
            id="lastName"
            label="Last Name"
            type="text"
            value={user.lastName}
            placeholder="Last name"
            isValid={validLastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <InputField
            id="phone"
            label="Phone Number"
            type="tel"
            value={user.phone}
            placeholder="Enter 10 digits..."
            isValid={validPhone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default UpdateUser;
