import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      // Only fetch if user is not already loaded
      if (user) return;

      try {
        const res = await axios.get(BASE_URL + '/profile/view', { 
          withCredentials: true 
        });
        dispatch(addUser(res.data));
      } catch (err) {
        // Check for authentication errors
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          navigate('/login');
        } else {
          console.error('Error fetching user profile:', err);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Body