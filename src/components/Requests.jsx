import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch,useSelector } from 'react-redux'
import { addRequests } from '../utils/requestsSlice'

const Requests = () => {
    const userRequests = useSelector((store) => store.requests);
    const dispatch = useDispatch();
    const fetchRequestsList = async() => {
        try {
            const requestsList = await axios.get(BASE_URL + "/user/request/received", { withCredentials: true });
            dispatch(addRequests(requestsList.data.data))
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRequestsList()
    }, []);
    
    if (!userRequests) {
        return <div><p>loading.....</p></div>
    }

    if (userRequests.length === 0) {
        return <div><h1>No requests Found</h1></div>
    }
  return (
<div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center">
  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Connection Requests</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
    {userRequests.map((user) => {
      const { firstName, lastName, age, gender, photoUrl, _id } = user.fromUserId

      return (
        <div
          key={_id}
          className="flex flex-col sm:flex-row items-center sm:items-start shadow-md rounded-xl p-5 border hover:shadow-xl transition"
        >
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-24 h-24 rounded-full object-cover border mb-4 sm:mb-0 sm:mr-5"
          />

          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-semibold">{firstName} {lastName}</h2>
            <p className="text-gray-600 mt-1">{gender}, {age} yrs</p>

            <div className="flex gap-3 mt-4 flex-wrap justify-center sm:justify-start">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Accept
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Reject
              </button>
            </div>
          </div>
        </div>
      )
    })}
  </div>
</div>


  )
}

export default Requests