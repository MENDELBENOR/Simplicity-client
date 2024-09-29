import React, { useState } from 'react';
import { IUser, UserUpdate } from '../utils/types';
import { validFirstName, validLastName, validPhone } from '../utils/helper';
import InputField from '../components/InputField';  // Import the new InputField component

const UpdateUser: React.FC = () => {
  const userTest: IUser = {
    _id: "1",
    email: "shmuel@gmail.com",
    firstName: "shmuel",
    lastName: "mori",
    icon: "",
    password: "12345",
    phone: "0506538466",
    workSpaceList: [],
  };

  const [user, setUser] = useState<UserUpdate>({
    firstName: userTest.firstName,
    lastName: userTest.lastName,
    phone: userTest.phone,
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

    console.log(user);
    

    // function to sand update user
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Update User</h1>

        <InputField
          id="firstName"
          label="First Name"
          type="text"
          value={user.firstName}
          placeholder="Enter two letters..."
          isValid={validFirstName}
          onChange={handleChange}
        />

        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          value={user.lastName}
          placeholder="Enter two letters..."
          isValid={validLastName}
          onChange={handleChange}
        />

        <InputField
          id="phone"
          label="Phone Number"
          type="tel"
          value={user.phone}
          placeholder="Enter 10 digits..."
          isValid={validPhone}
          onChange={handleChange}
        />

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
