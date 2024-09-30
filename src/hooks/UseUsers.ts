import axios from 'axios';
import { IUser } from '../utils/types';

const BASEURL = "http://localhost:3001/api/";

export const getUsers = async (setUsers: React.Dispatch<React.SetStateAction<IUser[]>>) => {
  try {
    const response = await axios.get(`${BASEURL}getAllUsers`);
    setUsers(response.data);
  } catch (err) {
    console.log('Failed to fetch users', err);
  }
};


