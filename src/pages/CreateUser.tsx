import React, { useState } from 'react';
import validator from 'validator';

const CreateUser: React.FC = () => {

    interface User {
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        password: string,
    }

    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const [phoneError, setPhoneError] = useState<string>('');

    const isValidPhoneNumber = (phoneNumber: string): boolean => {
        return validator.isMobilePhone(phoneNumber, 'any');
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser, [id]: value
        }))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setPhoneError(' ');

        if (!isValidPhoneNumber(user.phoneNumber)) {
            setPhoneError("number is not valid")
            console.log("error");

            return;
        };


        console.log(user);

        setUser({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Create Your Account</h1>

                <div className="mb-4">
                    <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700 text-left">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        pattern="^[\p{L}\s]+$"
                        title="first name must contain only letters from any language"
                        value={user.firstName}
                        placeholder="Enter your first name"
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        onChange={handleChange}
                        required
                        minLength={2}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700 text-left">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        pattern="^[\p{L}\s]+$"
                        title="last name must contain only letters from any language"
                        value={user.lastName}
                        placeholder="Enter your last name"
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        onChange={handleChange}
                        required
                        minLength={2}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="mail" className="block mb-1 text-sm font-medium text-gray-700 text-left">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        placeholder="Enter your email"
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block mb-1 text-sm font-medium text-gray-700 text-left">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={user.phoneNumber}
                        placeholder="Enter your phone number"
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        onChange={handleChange}
                        required
                    />
                    {phoneError && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 text-left">Password</label>
                    <input
                        type="password"
                        id="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Password must contain at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number"
                        value={user.password}
                        placeholder="Enter password"
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        onChange={handleChange}
                        required
                        minLength={8}
                    />
                </div>

                <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;
