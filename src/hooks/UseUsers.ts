import { IUser } from '../utils/types';

const BASEURL = "http://localhost:3001/api/";

export const getUsers = async (setUsers: React.Dispatch<React.SetStateAction<IUser[]>>) => {
    try {
      const response = await fetch(`${BASEURL}getAllUsers`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
      
    }
};

