import UseUsers from "../hooks/UseUsers"
import { IUser } from "../utils/types"

type Prop = {
    setPopDeleteUser: React.Dispatch<React.SetStateAction<boolean>>,
    data: IUser
}
export default function DeleteUser({ setPopDeleteUser, data }: Prop) {

    const { deleteUser } = UseUsers();

    console.log(data);

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black bg-opacity-50 p-4 fixed top-0 left-0 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
                <div
                    className="absolute top-0 right-0 m-2 p-1 rounded-full bg-red-700 text-white cursor-pointer"
                    onClick={() => { setPopDeleteUser(false) }} >

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

                <p className="font-semibold text-center text-gray-800 mb-5">Are you sure you want to DELETE
                    <span className="text-blue-600">{" "} {data.email}</span>
                </p>

                <div className="flex w-full justify-center space-x-4">
                    <button
                        onClick={() => {
                            setPopDeleteUser(false);
                            deleteUser(data.email);
                        }}
                        className="bg-red-500 px-4 py-2 rounded-lg hover:scale-105 hover:bg-red-700 text-white transition transform duration-300">
                        delete
                    </button>
                    <button
                        onClick={() => { setPopDeleteUser(false) }}
                        className="bg-blue-500 px-4 py-2 rounded-lg hover:scale-105 hover:bg-blue-700 text-white transition transform duration-300">
                        cancel
                    </button>
                </div>
            </div>
        </div>

    )
}
