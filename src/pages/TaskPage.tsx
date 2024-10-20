import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ITask } from "../utils/types";

// _id: string;
// name: string;
// description: string;
// status: STATUS;
// duration: number;
// groupId: string;

const tasks: ITask[] = [
    {
        _id: "1",
        name: "Task 1",
        description: "This is the first task.",
        status: "TO DO",
        duration: 60,
        groupId: "group-1"
    },
    {
        _id: "2",
        name: "Task 2",
        description: "This is the second task.",
        status: "IN PROGRESS",
        duration: 45,
        groupId: "group-1"
    },
    {
        _id: "3",
        name: "Task 3",
        description: "This is the third task.",
        status: "COMPLETE",
        duration: 120,
        groupId: "group-2"
    },
    {
        _id: "4",
        name: "Task 4",
        description: "This is the fourth task.",
        status: "TO DO",
        duration: 30,
        groupId: "group-2"
    },
    {
        _id: "5",
        name: "Task 5",
        description: "This is the fifth task.",
        status: "IN PROGRESS",
        duration: 90,
        groupId: "group-3"
    },
    {
        _id: "6",
        name: "Task 6",
        description: "This is the sixth task.",
        status: "COMPLETE",
        duration: 150,
        groupId: "group-3"
    }
];

export default function TaskPage() {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // get group data and task!
    }, [id])

    return (
        <div className="w-full h-screen bg-gray-300 mt-9 sm:p-10 flex flex-col items-center dark:bg-gray-800">
            <div className="flex w-[80%] justify-end p-4 text-2xl font-bold text-gray-600 dark:text-white">{tasks.length} Tasks active</div>
            
            <div className="w-[80%] flex items-center justify-between">
                <div className="flex space-x-4 ml-2"></div>
            </div>

        </div>
    )
}