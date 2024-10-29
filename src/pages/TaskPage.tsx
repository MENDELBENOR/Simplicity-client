import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";
import TableTask from "../components/TableTask";
import { initialTasks } from "../redux/slices/taskSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../redux/store";
import CreateTask from "../components/CreateTask";
import ButtonExport from "../components/ButtonExport";
import Loading from "../components/Loading";
import useTask from "../hooks/useTask";

export default function TaskPage() {

    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const [popCreateTask, setPopCreateTask] = useState<boolean>(false);
    const { searchTask } = useTask();

    useEffect(() => {
        dispatch(initialTasks(id!));
    }, [dispatch, id]);

    const handleNewSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;

        if (text.length === 0)
            dispatch(initialTasks(id!))
        else
            searchTask(text, id!);
    };

    return (
        <div className="w-full h-screen mt-9 sm:p-10 flex flex-col items-center dark:bg-gray-800">
            <div className="flex w-[80%] justify-center p-4 text-2xl font-bold text-gray-600 dark:text-white">
                {tasks.length} Tasks active
            </div>

            <div className="w-[80%] flex items-center justify-start mb-4">
                <div className="flex space-x-4">
                    {tasks.length > 0 &&
                        <ButtonExport rout='/task/exportTaskList' _id={id} name={'Tasks'} />
                    }
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleNewSearch}
                    required
                    className="border rounded-md p-2 ml-4 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                    className="flex items-center py-1 px-2 rounded-md border-2 bg-gray-300 hover:bg-blue-600 transition duration-300 ml-4 hover:text-white"
                    onClick={() => setPopCreateTask(!popCreateTask)}
                >
                    <HiPlusSm /> Add task
                </button>


            </div>

            {tasks.length > 0 ? <TableTask tasks={tasks} /> : <Loading />}

            {popCreateTask && <CreateTask groupId={id!} setPopCreateTask={setPopCreateTask} />}
        </div>
    )
}
