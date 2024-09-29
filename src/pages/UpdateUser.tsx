import { useState } from "react";
import { IUser } from "../utils/types";

export default function UpdateUser() {
    const user: IUser =  {
        _id: "12439",
        firstName: "Meir",
        lastName: "Banker",
        email: "meirb@gmail.com",
        phone: "0538700916", 
        icon: "",
        password: "",
        workSpaceList: [""]
    }

    const [firstName, setFirsName] = useState<string>(user.firstName);
    const [lastName, setLastName] = useState<string>(user.lastName);
    const [email, setEmail] = useState<string>(user.email);
    const [phone, setPhone] = useState<string>(user.phone);


    const handleSubmit = () =>{
        const userUpdate: IUser = {
            firstName,
            lastName,
            email,
            icon: user.icon,
            phone,
            _id: "1",
            password:"123456",
            workSpaceList: []
        }
        // function for user validation
        console.log(userUpdate);
        
    }

  return (
    <div className="w-[400px] sm:w-[500px] flex flex-col justify-center items-center p-2 border-2 border-[#1DC9B7] rounded">
        <h1 className="text-2xl mt-3">User Update</h1>
       <input className="w-3/4 p-2  border-2 border-[#1DC9B7] rounded mt-3 shadow-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirsName(e.target.value)} type="text" placeholder="" value={firstName}/>
       <input className="w-3/4 p-2  border-2 border-[#1DC9B7] rounded mt-3 shadow-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setLastName(e.target.value)}} type="text" placeholder="" value={lastName}/>
       <input className="w-3/4 p-2  border-2 border-[#1DC9B7] rounded mt-3 shadow-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setEmail(e.target.value)}} type="email" placeholder="" value={email}/>
       <input className="w-3/4 p-2  border-2 border-[#1DC9B7] rounded mt-3 shadow-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setPhone(e.target.value)}} type="text" placeholder="" value={phone}/>
       <button className="w-[70%] p-2 rounded-md bg-[#EF0D77] mt-10 mb-5 hover:bg-[#f369a9] hover:scale-110 transition-all duration-300 shadow-lg" onClick={handleSubmit}>
            Send
       </button>
    </div>
  )
}