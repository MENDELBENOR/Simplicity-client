import React, { useState } from 'react';
import axios from 'axios';
import { BASEURL } from '../hooks/UseUsers';
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate


const SendEmailOtp: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate(); // יצירת משתנה navigate


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // כאן תוכל להוסיף את בקשת ה-API שלך למשלוח קוד חד פעמי לאימייל
      const response = await axios.post(`${BASEURL}otpService`, { email }, { withCredentials: true }); 
      setMessage(response.data.displayMessage);
      
      // אם התגובה חיובית, נעבור לראוט /otp
      if (response.data.isSuccessful) {
        console.log("its work!");
        navigate(`/otp/${email}`); // העברת האימייל כפרמטר ב-URL
      }
    } catch (error) {
      setMessage('Failed to send code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Enter your Email Address to Send One-Time Code:</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="w-full h-12 text-center text-xl font-bold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="max-w-[260px] mx-auto mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg ${isLoading ? 'bg-gray-500' : 'bg-indigo-500'} px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transition-colors duration-150`}
            >
              {isLoading ? 'Sending...' : 'Send Code'}
            </button>
          </div>
        </form>

        {message && <div className="mt-4 text-slate-500">{message}</div>}
      </div>
    </div>
  );
};

export default SendEmailOtp;
