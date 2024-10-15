import { useEffect, useState } from "react";
import { IGroup } from '../utils/types';
import useGroup from "../hooks/useGroup";
import { useNavigate } from "react-router-dom";
// motion is library to delate to show the list of groups
import { motion } from "framer-motion";

type Props = {
    projectId: string;
}

export default function Groups({ projectId }: Props) {
    const { getGroupsByProject } = useGroup();
    const navigate = useNavigate();
    const [groups, setGroups] = useState<IGroup[]>([]);

    useEffect(() => {
        // get groups by id of the project
        getGroupsByProject(setGroups, projectId);
    }, []);

    const navigatePage = (groupId: string) => {
        navigate(`/task/${groupId}`);
    }

    return (
        <div>
            {groups.map((group, index) => (
                <motion.div
                    key={group._id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 * index }}
                >
                    {/* when you click we to to task page with the id in the params */}
                    <div className="flex pl-4 py-1 hover:bg-gray-600 rounded mt-1 mr-1 cursor-pointer transition duration-200"
                        onClick={() => navigatePage(group._id)}
                    >
                        <span>{group.name}</span>
                    </div>
                </motion.div>
            ))
            }
        </div>
    );
}