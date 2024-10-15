import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

const BASEURL = "http://localhost:3001/api/";



export default function UseProjects() {

  const getProjects = async (setProjectList: Dispatch<SetStateAction<any[]>>): Promise<void> => {
    try {
      const response = await axios.get(`${BASEURL}getAllProjects`, { withCredentials: true });

      if (response.data.isSuccessful) {
        setProjectList(response.data.data); 
      }
    } catch (err) {
      console.error("Error fetching projects", err); 
    }
  }

  return { getProjects };
}
