import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from "axios"
import {BASE_URL} from "../utils/constants"



const Feed = () => {
  const [userfeed, setuserfeed] = useState('');

  useEffect(()=> {  const FetchFeedData = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/feed', { withCredentials: true })
      setuserfeed(res.data.data);
    } catch (error) {
      console.log('ERROR: ' + error)
    } 
  };
  
    FetchFeedData();
}, [])

  return (
    <div>
     {userfeed.length > 0 && <UserCard user={userfeed[0]} />}
    </div>
  )
}

export default Feed