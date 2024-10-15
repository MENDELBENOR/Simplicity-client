import axios from 'axios';
import { errorFromServer, successFromServer } from '../utils/toast';
import { IGroup } from '../utils/types';

const BASEURL = "http://localhost:3001/group/";

export default function useGroup() {

    const getAllGroup = async (setGroup: React.Dispatch<React.SetStateAction<IGroup[]>>) => {
        try {
            const response = await axios(`${BASEURL}getAllGroups`, { withCredentials: true })
            if (response.data.isSuccessful)
                setGroup(response.data.data);
        } catch (err) {
            if (axios.isAxiosError(err))
                errorFromServer(err.response?.data.displayMessage)
            setGroup([]);
        }
    }
    return { getAllGroup }
}


