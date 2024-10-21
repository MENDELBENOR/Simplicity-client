import axios from 'axios';
import { errorFromServer, successFromServer } from '../utils/toast';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';


type taskType = {
    name: string;
    description: string;
    status: "TO DO" | "IN PROGRESS" | "COMPLETE";
    duration: number;
    groupId: string;
};

export default function useTask() {
    const BASEURL = "http://localhost:3001/task/";
    const dispatch: AppDispatch = useDispatch();


    const createTask = async (newTask: taskType) => {
        try {
            const response = await axios.post(`${BASEURL}createTask`, newTask, { withCredentials: true })
            if (response.data.isSuccessful) {
                dispatch(addTask(response.data.data));
                successFromServer(response.data.displayMessage)
            }
        }
        catch (err) {
            if (axios.isAxiosError(err))
                errorFromServer(err.response?.data.displayMessage)
        }
    }

    return { createTask }
}


