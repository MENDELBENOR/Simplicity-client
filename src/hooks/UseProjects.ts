import axios from 'axios';
import { errorFromServer, successFromServer } from '../utils/toast';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addProject } from '../redux/slices/projectsSlice';
import { NewProject } from '../utils/types'

const BASEURL = "http://localhost:3001/project/";


export default function UseProjects() {

    const dispatch: AppDispatch = useDispatch();


    // create project //
    const createProject = async (newProject: NewProject) => {
        try {
            const response = await axios.post(`${BASEURL}createProject`, newProject, { withCredentials: true });
            if (response.data.isSuccessful) {
                dispatch(addProject(response.data.data))
                successFromServer(response.data.displayMessage)
            }
        } catch (err) {
            if (axios.isAxiosError(err))
                errorFromServer(err.response?.data.displayMessage)
        }
    }


    return { createProject }
}










 
