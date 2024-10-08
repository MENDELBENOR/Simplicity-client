import { useEffect, useState } from "react";
import Table from "../components/TableUsers";
import { IUser } from "../utils/types";
import CreateUser from "./CreateUser";
import { getUsers } from "../hooks/UseUsers";
import Search from "../components/Search";
import ButtonExport from "../components/ButtonExport";

export default function MainContent() {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    if (!users)
        return <p>loding...</p>

    return (
        <div className="w-full h-full bg-gray-300 mt-9 p-2 sm:p-10 flex flex-col justify-center items-center">
            <div className="w-[80%] flex items-center justify-between">
                <CreateUser />
                <div className="flex space-x-4"><ButtonExport /><Search setUsers={setUsers} /></div>
            </div>
            <Table setUsers={setUsers} users={users} />
        </div>
    )
}
