import axios from 'axios';
import { errorFromServer } from '../utils/toast';
import { IGroup } from '../utils/types';

const BASEURL = "http://localhost:3001/group/";

export default function useGroup() {

    const getGroupsByProject = async (setGroup: React.Dispatch<React.SetStateAction<IGroup[]>>, _id: string) => {
        try {
            const response = await axios(`${BASEURL}getGroupsByProject/${_id}`, { withCredentials: true })
            if (response.data.isSuccessful)
                setGroup(response.data.data);
        } catch (err) {
            if (axios.isAxiosError(err))
                errorFromServer(err.response?.data.displayMessage)
            setGroup([]);
        }
    }
    return { getGroupsByProject }
}


