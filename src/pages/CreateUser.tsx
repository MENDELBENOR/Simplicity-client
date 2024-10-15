import React, { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

const CreateUser: React.FC = () => {
    interface User {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;
    }

    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const [phoneError, setPhoneError] = useState<string>('');
    const [errorCreateUser, setErrorCreateUser] = useState<string>('');
    const [successCreateUser, setSuccessCreateUser] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isValidPhone = (phoneNumber: string): boolean => {
        return validator.isMobilePhone(phoneNumber, 'any');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser, [id]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setPhoneError(' ');
        setErrorCreateUser(' ');
        setSuccessCreateUser(' ');

        if (!isValidPhone(user.phone)) {
            setPhoneError("number is not valid");
            console.log("error");

            setTimeout(() => {
                setPhoneError('');
            }, 3000);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/createUser", user);
            setSuccessCreateUser("User created successfully!");
            console.log(response.data);

            setUser({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
            });
            setIsOpen(false);

            setTimeout(() => {
                setSuccessCreateUser('');
            }, 3000);

        } catch (errorCreateUser) {
            setErrorCreateUser("Failed to create user. Please try again.");
            console.error(errorCreateUser);

            setTimeout(() => {
                setErrorCreateUser('');
            }, 3000);

        }
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out hover:-translate hover:scale-105 text-[9px] custom-text-size"
            >
                Create user
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border border-gray-300 relative">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Create Your Account</h1>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2  rounded-full bg-red-700 text-white cursor-pointer transition duration-200"
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
                        </button>

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
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 text-left">Email</label>
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
                            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700 text-left">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={user.phone}
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

                        {errorCreateUser && <p className="text-red-500 text-xs italic">{errorCreateUser}</p>}
                        {successCreateUser && <p className="text-green-500 text-xs italic">{successCreateUser}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CreateUser;
