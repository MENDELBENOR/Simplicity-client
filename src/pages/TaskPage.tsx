import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";
import TableTask from "../components/TableTask";
import { initialTasks } from "../redux/slices/taskSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../redux/store";
import CreateTask from "../components/CreateTask";

export default function TaskPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const [popCreateTask, setPopCreateTask] = useState<boolean>(false);

    useEffect(() => {
        dispatch(initialTasks(id!));
    }, [dispatch, id]);

    return (
        <div className="w-full h-screen mt-9 sm:p-10 flex flex-col items-center dark:bg-gray-800">
            <div className="flex w-[80%] justify-center p-4 text-2xl font-bold text-gray-600 dark:text-white">{tasks.length} Tasks active</div>

            <div className="w-[80%] flex items-center">
                <button
                    className="flex items-center py-1 px-2 rounded-md dark:text-white dark:border-[1px] dark:hover:bg-white dark:hover:text-gray-800"
                    onClick={() => {
                        setPopCreateTask(!popCreateTask);
                    }}><HiPlusSm /> Add task</button>
            </div>

            {tasks.length > 0 && <TableTask tasks={tasks} />}

            {popCreateTask && <CreateTask groupId={id!} setPopCreateTask={setPopCreateTask} />}
        </div>
    )
}