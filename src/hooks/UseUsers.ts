import axios from 'axios';
import { IUser, UserUpdate, Credentials, UserSignUp } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { errorFromServer, loginToast, successFromServer } from '../utils/toast';
const BASEURL = "http://localhost:3001/api/";


export default function UseUsers() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const getUsers = async (setUsers: React.Dispatch<React.SetStateAction<IUser[]>>) => {
    try {
      const response = await axios.get(`${BASEURL}getAllUsers`);
      if (response.data.isSuccessful)
        setUsers(response.data.data);
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage);
      setUsers([]);
    }
  };

  const updateUser = async (user: UserUpdate) => {
    try {
      const response = await axios.patch(`${BASEURL}updateUser`, user);
      successFromServer(response.data.displayMessage);
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage)
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
      dispatch(login(response.data.data));
      loginToast()
      navigate('/users');
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage)
    }
  }

  const loginWithGoogle = async (email: string) => {
    try {
      const response = await axios.post(`${BASEURL}loginWithGoogle`, { email }, {
        withCredentials: true,
      });
      dispatch(login(response.data.data));
      navigate('/users');
      loginToast();
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage)
    }
  };

  const createUser = async (user: UserSignUp) => {
    try {
      const response = await axios.post(`${BASEURL}createUser`, user);
      console.log(response);
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage)
    }
  }

  const deleteUser = async (email: string) => {
    try {
      const response = await axios.post(`${BASEURL}deleteUser`, email);
      console.log(response);
    } catch (err) {
      if (axios.isAxiosError(err))
        errorFromServer(err.response?.data.displayMessage)
    }
  }
  //logout
  const logout = async (): Promise<void> => {
    try {
      await axios.post(`${BASEURL}logout`,{},{withCredentials: true});
      navigate(``);
      
    } catch (err) {
      console.log('Failed to logout', err);
    }
  };





  return { updateUser, loginByPassword, searchUser, getUsers, loginWithGoogle, createUser, deleteUser, logout, loading, error }
}







