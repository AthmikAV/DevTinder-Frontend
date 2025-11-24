import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setConnections } from '../utils/connectionSlice';

const Connection = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.connections);

    const handelConnection = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/request/connections', { withCredentials: true });
            dispatch(setConnections(res.data.data));
        } catch (error) {
            console.log("ERROR : " + error)
        }
    }

    useEffect(() => {
        handelConnection();
    }, []);

    if (!data) {
        return <div><h1>Loading....</h1></div>
    }
    if (data.length === 0) {
        return <div><h1>No connection found</h1></div>
    }

    return (
        <div className="flex  flex-wrap justify-center gap-6 mt-6">
            {data.map((item) => (
                <div key={item._id} className="flex card w-64 bg-base-200 shadow-md rounded-lg overflow-hidden">
                    <figure className="h-40">
                        <img
                            src={item.photoUrl || 'https://via.placeholder.com/150'}
                            alt={`${item.firstName} ${item.lastName}`}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">{item.firstName} {item.lastName}</h2>
                        <p>Age: {item.age}</p>
                        <p>Gender: {item.gender}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Connection;
