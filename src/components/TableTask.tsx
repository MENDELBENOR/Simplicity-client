import { ITask } from "../utils/types";
import { RiDraggable } from "react-icons/ri";
import { BsHourglass } from "react-icons/bs";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

// _id: string;
// name: string;
// description: string;
// status: STATUS;
// duration: number;
// groupId: string;

type Prop = {
    tasks: ITask[];
}

export default function TableTask({ tasks }: Prop) {
    const [selectTask, setSelectTask] = useState<ITask>();

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
                        <td className="px-2 py-2 flex items-center space-x-2 font-s">
                            <RiDraggable className="cursor-move" />
                            <span className='bg-transparent'>
                                {task.status === "COMPLETE" ?
                                    <span className='text-[#2fb170] text-lg'>
                                        <FaRegCircleCheck />
                                    </span> :
                                    <span className={`${task.status === "IN PROGRESS" ? 'text-[#5A51E2]' : 'bg-[#DCDEE1] text-gray-400'}`}>
                                        <FaRegDotCircle style={{ backgroundColor: "white", borderRadius: "50%" }} size={17} />
                                    </span>
                                }
                            </span>
                            <span>{task.name}</span>
                        </td>
                        <td className="px-2 py-1">
                            <span className={`inline-block px-2 py-1 rounded-md text-[13px] font-semibold cursor-pointer ${task.status === 'COMPLETE'
                                ? 'bg-[#008141] text-white'
                                : task.status === 'TO DO'
                                    ? 'bg-[#DCDEE1] text-gray-700'
                                    : 'bg-[#5A51E2] text-white'
                                }`}>
                                <span className="flex items-center space-x-1 text-white">
                                    <span className='bg-transparent'>
                                        {task.status === "COMPLETE" ?
                                            <span className='text-[#2fb170] text-lg'>
                                                <FaRegCircleCheck />
                                            </span> :
                                            <span className={`${task.status === "IN PROGRESS" ? 'text-white' : 'bg-[#DCDEE1] text-gray-400'}`}>
                                                <FaRegDotCircle size={17} />
                                            </span>
                                        }
                                    </span>
                                    <span className={`${task.status === "TO DO" && 'text-gray-500'}`}>
                                        {task.status}
                                    </span>
                                </span>
                            </span>
                        </td>
                        <td className="px-2 py-1">
                            <span className="flex items-center">
                                <BsHourglass />
                                <span className="px-2">{task.duration}h</span>
                            </span>
                        </td>
                        <td className="px-2 py-1">{task.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
