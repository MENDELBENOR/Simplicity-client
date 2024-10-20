import { ITask } from "../utils/types";
import { RiDraggable } from "react-icons/ri";
import { BsHourglass } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

const tasks: ITask[] = [
    {
        _id: "1",
        name: "Task 1",
        description: "This is the first task.",
        status: "TO DO",
        duration: 6,
        groupId: "group-1"
    },
    {
        _id: "2",
        name: "Task 2",
        description: "This is the second task.",
        status: "IN PROGRESS",
        duration: 4,
        groupId: "group-1"
    },
    {
        _id: "3",
        name: "Task 3",
        description: "This is the third task.",
        status: "COMPLETE",
        duration: 12,
        groupId: "group-2"
    },
    {
        _id: "4",
        name: "Task 4",
        description: "This is the fourth task.",
        status: "TO DO",
        duration: 3,
        groupId: "group-2"
    },
    {
        _id: "5",
        name: "Task 5",
        description: "This is the fifth task.",
        status: "IN PROGRESS",
        duration: 9,
        groupId: "group-3"
    },
    {
        _id: "6",
        name: "Task 6",
        description: "This is the sixth task.",
        status: "COMPLETE",
        duration: 10,
        groupId: "group-3"
    }
];

// _id: string;
// name: string;
// description: string;
// status: STATUS;
// duration: number;
// groupId: string;

export default function TableTask() {

    const [selectTask, setSelectTask] = useState<ITask>();

    useEffect(() => {
        console.log(selectTask);
    }, [selectTask])

    return (
        <table className="min-w-[400px] w-[99%] border-spacing-y-2 text-[15px]">
            <thead>
                <tr className="bg-white dark:bg-gray-800 dark:text-white border-b-[1px] text-[15px] text-left text-gray-400 font-extralight">
                    <th className="p-2 cursor-pointer">Name</th>
                    <th className="p-2 cursor-pointer">Status</th>
                    <th className="p-2 cursor-pointer">Duration</th>
                    <th className="p-2 cursor-pointer">Description</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task._id}
                        className="text-[13px] transition-transform duration-300 ease-in-out border-b-[1px] bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100"
                        onClick={() => {
                            setSelectTask(task);
                        }}
                    >
                        <td className="px-2 py-1 flex items-center space-x-2 font-s"><RiDraggable className="cursor-move" /> <span className='bg-transparent'>
                            {task.status === "COMPLETE" ? <span className=' text-[#2fb170] text-lg'><FaRegCircleCheck />
                            </span> : <span className={`${task.status === "IN PROGRESS" ? 'text-[#5A51E2]' : 'bg-[#DCDEE1] text-gray-400'}`}><FaRegDotCircle style={{ backgroundColor: "white", borderRadius: "50%" }} size={17} />
                            </span>}
                        </span ><span>{task.name}</span></td>
                        <td className="px-2 py-1">
                            <p className={`inline-block px-2 py-1 rounded-md text-[13px] font-semibold cursor-pointer ${task.status === 'COMPLETE'
                                ? 'bg-[#008141] text-white'
                                : task.status === 'TO DO'
                                    ? 'bg-[#DCDEE1] text-gray-700'
                                    : 'bg-[#5A51E2] text-white'
                                }`}>
                                <span className="flex items-center space-x-1 text-white">
                                    <span className='bg-transparent'>
                                        {task.status === "COMPLETE" ? <span className=' text-[#2fb170] text-lg'><FaRegCircleCheck />
                                        </span> : <span className={`${task.status === "IN PROGRESS" ? 'text-white' : 'bg-[#DCDEE1] text-gray-400'}`}><FaRegDotCircle size={17} />
                                        </span>}
                                    </span >
                                    <p className={`${task.status === "TO DO" && 'text-gray-500'}`}> {task.status}</p></span>
                            </p>
                        </td>
                        <td className="px-2 py-1"><span className="flex items-center"><BsHourglass /><span className="px-2">{task.duration}h</span></span></td>
                        <td className="px-2 py-1">{task.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
