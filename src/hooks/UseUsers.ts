import axios from 'axios';
import { IUser, UserUpdate, Credentials, UserSignUp } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BASEURL = "http://localhost:3001/api/";


export default function UseUsers() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const getUsers = async (setUsers: React.Dispatch<React.SetStateAction<IUser[]>>) => {
    try {
      const response = await axios.get(`${BASEURL}getAllUsers`);
      setUsers(response.data.data);
    } catch (err) {
      setUsers([]);
      console.log('Failed to fetch users', err);
    }
  };

  const updateUser = async (user: UserUpdate) => {
    try {
      const response = await axios.patch(`${BASEURL}updateUser`, user);
      console.log(response.data.data);
    } catch (err) {
      console.log('Failed to fetch users', err);
    }
  };

  const searchUser = async (text: string, setUsers: React.Dispatch<React.SetStateAction<IUser[]>>) => {
    try {
      const response = await axios.get(`${BASEURL}searchUser/${text}`,);
      setUsers(response.data.data);
    } catch (err) {
      console.log('Failed to search for user', err);
    }
  }

  const loginByPassword = async (data: Credentials) => {
    try {
      const response = await axios.post(`${BASEURL}login`, data, {
        withCredentials: true,
      });
      console.log(response);
      navigate('/users');
    } catch (err) {
      console.log('Failed to search for user', err);
    }
  }

  const loginWithGoogle = async (email: string) => {
    try {
      const response = await axios.post(`${BASEURL}loginWithGoogle`, { email }, {
        withCredentials: true,
      });
      console.log(response);
      navigate('/users');
    } catch (err) {
      console.log('Failed to search for user', err);
    }
  };

  const createUser = async (user: UserSignUp) => {
    try {
      const response = await axios.post(`${BASEURL}createUser`, user);
      console.log(response);
    } catch (err) {
      console.log('Failed to search for user', err);
    }
  }

  const deleteUser = async (email: string) => {
    try {
      const response = await axios.post(`${BASEURL}deleteUser`, email);
      console.log(response);
    } catch (err) {
      console.log('Failed to search for user', err);
    }
  }


  return { updateUser, loginByPassword, searchUser, getUsers, loginWithGoogle, createUser, deleteUser, loading, error }
}







