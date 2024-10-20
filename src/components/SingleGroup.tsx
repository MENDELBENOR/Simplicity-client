import { IGroup } from "../utils/types";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type Prop = {
    group: IGroup;
    onEdit: () => void; // פונקציה לעריכת הקבוצה
    //onDelete: () => void; // פונקציה למחיקת הקבוצה
}

export default function SingleGroup({ group, onEdit }: Prop) {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-600 px-2 py-2 my-1 cursor-pointer rounded-lg flex items-center justify-between hover:bg-gray-900 transition duration-200'
            onClick={() => {
                navigate(`/task/${group._id}`)
            }}>
            <span className='flex items-center'>{group.name}</span>
            <span className='flex items-center'>
                <p
                    className='p-[2px] mr-1 hover:bg-slate-400 rounded-lg transition duration-300 cursor-pointer'
                    onClick={onEdit}
                >
                    <LiaEdit />
                </p>
                <p
                    className='p-[2px] mr-1 hover:bg-slate-400 rounded-lg transition duration-300 cursor-pointer'
                //onClick={onDelete}
                >
                    <RiDeleteBin7Line />
                </p>
            </span>
        </div>
    );
}
