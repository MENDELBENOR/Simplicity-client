import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import img from '../../public/images/login-img.jpg';

interface IUserGoogle {
    email: string;
    picture: string | undefined;
    given_name: string;
    family_name: string;
}

export default function Login() {
    const [user, setUser] = useState<IUserGoogle | null>(null);

    if (user) console.log('User logged in!');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");

    };

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-contain bg-[#7B7770] text-white"
        >
            <div className="absolute inset-0 bg-purple-950 bg-opacity-50"></div>
            <div className="w-[90%] sm:w-1/2 lg:w-1/4 flex flex-col justify-center items-center font-serif rounded-2xl bg-transparent backdrop-blur-sm border-[1px] border-white p-10">
                <h1 className="text-xl font-semibold">Login</h1>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                    <input
                        className="p-2 m-2 bg-transparent w-full focus:outline-none border-[1px] border-white rounded-2xl placeholder focus:ring-[2px] ring-white"
                        placeholder="Email"
                        type="email"
                        required
                    />

                    <input
                        className="p-2 m-2 bg-transparent w-full focus:outline-none border-[1px] border-white rounded-2xl placeholder focus:ring-[2px] ring-white"
                        placeholder="Password"
                        type="password"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-400 p-2 w-4/5 m-2 rounded-2xl border-2 border-white hover:scale-105 transition transform duration-300 "
                    >
                        Continue
                    </button>
                </form>

                <GoogleLogin
                    onSuccess={(c) => {
                        const decodedCredentials = jwtDecode(c.credential || "");
                        setUser(decodedCredentials as IUserGoogle);
                    }}
                    onError={() => { console.log("Error logging in"); }}
                />
            </div>
        </div>
    );
}
