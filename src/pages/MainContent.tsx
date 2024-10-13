import Table from "../components/TableUsers";
import CreateUser from "./CreateUser";
import Search from "../components/Search";
import ButtonExport from "../components/ButtonExport";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { initialUsers } from "../redux/slices/usersSlice";
import { useSelector } from "react-redux";

export default function MainContent() {
    const dispatch: AppDispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        dispatch(initialUsers());
    }, [])

    if (!users)
        return <p>loding...</p>

    return (
        <div className="w-full h-full bg-gray-300 mt-9 p-2 sm:p-10 flex flex-col justify-center items-center">
            <div className="w-[80%] flex items-center justify-between">
                <CreateUser />
                <div className="flex space-x-4"><ButtonExport /><Search /></div>
            </div>
            <Table users={users} />
        </div>
    )
}
