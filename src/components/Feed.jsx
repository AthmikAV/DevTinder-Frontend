import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from "axios"
import {BASE_URL} from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { addUserFeed } from '../utils/userFeedSlice'
import { clearFeed } from '../utils/userFeedSlice'
const Feed = () => {
  const dispatch = useDispatch();
  const userFeed = useSelector((state) => state.userFeed);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchFeedData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(BASE_URL + '/user/feed', { withCredentials: true })
        dispatch(addUserFeed(res.data.data))
      } catch (error) {
        console.log('ERROR: ' + error)
        setError('Failed to load user feed');
      } finally {
        setLoading(false);
      }
    };

    dispatch(clearFeed());
    FetchFeedData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!Array.isArray(userFeed) || userFeed.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div>
      <UserCard user={userFeed[0]} />
    </div>
  )
}

export default Feed