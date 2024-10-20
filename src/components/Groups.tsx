import { useEffect, useState } from "react";
import { IGroup, UpdateGroupType } from '../utils/types';
import useGroup from "../hooks/useGroup";
import { motion } from "framer-motion";
import SingleGroup from "./SingleGroup";
import UpdateGroup from "./UpdateGroup";
import CreateGrop from "./CreateGrop";

type Props = {
    projectId: string;
}

export default function Groups({ projectId }: Props) {
    const { getGroupsByProject, updateGroup } = useGroup(); // יש לוודא שה-import של updateGroup הוא מה-hook
    const [groups, setGroups] = useState<IGroup[]>([]);
    const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
    const [isCreateGroupPopupOpen, setCreateGroupPopupOpen] = useState(false);

    const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);

    useEffect(() => {
        const fetchGroups = async () => {
            await getGroupsByProject(setGroups, projectId);
        };

        fetchGroups();
    }, [projectId]);

    const handleEditGroup = (groupId: string) => {
        const groupToEdit = groups.find(group => group._id === groupId);
        if (groupToEdit) {
            setSelectedGroup(groupToEdit); // שמור את הקבוצה שנבחרה
            setUpdatePopupOpen(true); // פתח את הפופ-אפ
        }
    };

    const handleUpdateGroup = async (updatedGroup: UpdateGroupType) => {
        await updateGroup(updatedGroup); // קריאה לעדכון הקבוצה
        setUpdatePopupOpen(false); // סגור את הפופ-אפ
        // רענן את רשימת הקבוצות אם יש צורך
        await getGroupsByProject(setGroups, projectId); // עדכון קבוצות לאחר העדכון
    };

    return (
        <div>
            {groups.length > 0 ? (
                groups.map((group, index) => (
                    <motion.div
                        key={group._id}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 * index }}
                    >
                        <SingleGroup
                            group={group}
                            onEdit={() => handleEditGroup(group._id)}
                        // onDelete={() => handleDeleteGroup(group._id)} 
                        />
                    </motion.div>
                ))
            ) : (
                <div className="text-gray-500 text-center py-4">No groups available.</div>
            )}
            <div className='flex justify-center items-center mb-4 mt-2'>
                <div className='text-lg font-bold'>Add group</div>
                <button
                    onClick={() => {
                        setCreateGroupPopupOpen(true);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-1 px-2 rounded transition transform duration-300"
                >
                    +
                </button>
            </div>

            {isUpdatePopupOpen && selectedGroup && (
                <UpdateGroup
                    setPopUpdateGroup={setUpdatePopupOpen}
                    data={selectedGroup}
                    onUpdate={handleUpdateGroup} // העברת הפונקציה לעדכון
                />
            )}
            {isCreateGroupPopupOpen && (
                <CreateGrop
                    setCreateGroupPopupOpen={setCreateGroupPopupOpen}
                    projectId={projectId} />
            )
            }
        </div>
    );
}
