import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeUserFeed } from '../utils/userFeedSlice'

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSendRequestFunc = async (status, _id) => {
    try {
      setLoading(true);
      await axios.post(
        BASE_URL + '/request/send/' + status + '/' + _id, 
        {}, 
        { withCredentials: true }
      );
      dispatch(removeUserFeed(_id));
    } catch (error) {
      console.log("ERROR: " + error);
      // Optionally show error to user
    } finally {
      setLoading(false);
    }
  }

  // Safety check
  if (!user) return null;

  const { _id, firstName, lastName, age, gender, photoUrl, about } = user;
    
  return (
    <div className='flex justify-center mt-7'>
      <div className="card bg-base-200 w-60 shadow-sm pt-6">
        <figure>
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`} 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + ' ' + lastName}</h2>
          <p>About: {about}</p>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <div className="card-actions justify-center">
            <button 
              className="btn btn-error" 
              onClick={() => handleSendRequestFunc("ignore", _id)}
              disabled={loading}
            >
              Ignore
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => handleSendRequestFunc("interest", _id)}
              disabled={loading}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard