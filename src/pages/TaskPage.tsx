import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TableTask from "../components/TableTask";
import { initialTasks } from "../redux/slices/taskSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../redux/store";

export default function TaskPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        dispatch(initialTasks(id!));
    }, [dispatch, id]);

    return (
        <div className="w-full h-screen mt-9 sm:p-10 flex flex-col items-center dark:bg-gray-800">
            <div className="flex w-[80%] justify-center p-4 text-2xl font-bold text-gray-600 dark:text-white">{tasks.length} Tasks active</div>

            <div className="w-[80%] flex items-center">
                <div className="flex space-x-4 ml-2"></div>
            </div>

            {tasks.length > 0 && <TableTask tasks={tasks} />}
        </div>
    )
}