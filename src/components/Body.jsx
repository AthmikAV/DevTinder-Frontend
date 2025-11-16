import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'


const Body = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const fetchData = async () => {
    try {
      if (!user) {
        const res =await axios.get(BASE_URL + '/profile/view', { withCredentials: true })
        dispatch(addUser(res.data));
        console.log(res)
      }
    }
    catch (err) {
      if (err.response.status === 500) {
        navigate('/login')
      }
    }
    } 
  
  
  useEffect(() => { fetchData(); }, []);



  return (
      <>
        <Navbar />
          <Outlet />
          <Footer/>
      </>
  )
}

export default Body