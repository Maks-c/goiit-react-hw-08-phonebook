import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';



const register = createAsyncThunk('auth/register',
  async credentials => {
  try{
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error){
    console.log(error.message);
  }
});

const logIn = createAsyncThunk('auth/login',
  async credentials => {
  try{
    const { data } = await axios.post('/users/login', credentials);
    return data
  } catch (error){
    console.log('wrong password');
  }
});

const logOut = createAsyncThunk('auth/logout',
  async () => {
  try{
    const { data } = await axios.post('/users/logout');
    return data;
  } catch (error){
    console.log('wrong password');
  }
});





const operations = { register,logIn,logOut};
export default operations;



