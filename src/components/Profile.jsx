import React from 'react'
import EditProfile from './EditProfile'
import UserCard from './UserCard'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'


const Profile = () => {
const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  const navigateToEditPage = () => {
    navigate('/profile/edit');
  }
const fetchData = async () => {
  try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      
      dispatch(addUser(res.data));

  } catch (err) {
    console.log(err);

    if (err.response?.status === 401 || err.response?.status === 500) {
      navigate("/login");
    }
  }
};
useEffect(() => {

    fetchData();
}, []);
if (!user) return <div>Loading...</div>;
  return (
    <>
      <UserCard user={user} />
      <div className='flex justify-center mt-3'><button className="btn btn-primary" onClick={navigateToEditPage}>Edit</button></div>
    </>
  )
}

export default Profile