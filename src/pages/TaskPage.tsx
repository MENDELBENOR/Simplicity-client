import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TableTask from "../components/TableTask";
import { initialTasks } from "../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export default function TaskPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // get group data and task!
        dispatch(initialTasks(id!));
    }, [id])

    return (
        <div className="w-full h-screen mt-9 sm:p-10 flex flex-col items-center dark:bg-gray-800">
            <div className="flex w-[80%] justify-end p-4 text-2xl font-bold text-gray-600 dark:text-white">{6} Tasks active</div>

            <div className="w-[80%] flex items-center">
                <div className="flex space-x-4 ml-2"></div>
            </div>

            <TableTask />
        </div>
    )
}