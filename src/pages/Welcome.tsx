import { useState } from 'react';
import loginImg from '../assets/login.jpg';
import signImg from '../assets/sign-in.jpg';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

export default function Welcome() {
    const [showLogin, setShowLogin] = useState<boolean>(true);

    const handleSwitch = () => {
        setShowLogin(!showLogin);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#BED6D8] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] w-full grid md:grid-cols-5 gap-8">
                {showLogin ? (
                    <>
                        <div
                            className="bg-white p-8 rounded-xl shadow-2xl col-span-2 lg:order-1 order-2 h-[450px] transition-transform duration-500 ease-in-out"
                        >
                            <Login handleSwitch={handleSwitch} />
                        </div>
                        <div className="hidden md:block bg-gradient-to-r from-[#F9EFED] to-[#F4855A] rounded-xl shadow-xl order-2 lg:order-1 h-[450px] col-span-3">
                            <div className="h-full flex items-center justify-center">
                                <img src={loginImg} alt="Login illustration" className="w-[95%] rounded-xl" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="hidden md:block bg-gradient-to-r from-[#BEC2C3] via-[#EBECF0] to-[#D6DBDF] rounded-xl shadow-xl order-2 lg:order-1 h-[450px] col-span-3 ">
                            <div className="h-full flex items-center justify-center">
                                <img src={signImg} alt="Login illustration" className="w-[95%] rounded-xl" />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-2xl col-span-2 lg:order-1 order-2 h-[450px]">
                            <SignUp handleSwitch={handleSwitch} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}