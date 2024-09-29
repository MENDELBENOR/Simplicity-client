import {  useEffect, useState } from 'react';
import { IUser } from '../utils/types';

const BASEURL = "https://localhost/3001/api/";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null); 
    
    try {
      const response = await fetch(`${BASEURL}users`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchUsers();
  }, [])
  
  return { users, loading, error, fetchUsers };
};

export default useUsers;

