import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function TaskPage() {
    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        // get group data and task!
    }, [id])

    return (
        <div className="w-full h-screen bg-blue-400"></div>
    )
}