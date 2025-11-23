import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setemail] = useState('athmik@gmail.com');
    const [password, setpassword] = useState('Athmik@124');
    const [error, seterror] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try{const res = await axios.post(BASE_URL + '/login',
            {email,password},{withCredentials:true})
            dispatch(addUser(res.data.data));
            seterror('')
            return navigate("/feed")
        }
        catch (err) {
        seterror(err.response?.data?.message || "Something went wrong");
}
    }

    return (
      <>
      <div className='flex justify-center items-center lg:mt-[60px] mt-10'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend text-xl">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)}/>

            <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
          </fieldset>
          
            </div>
            {Error && (
                <div className='flex justify-center'>
            <p className='text-red-500 my-2'>{error}</p>
                </div>)}
    </>
  )
}

export default Login