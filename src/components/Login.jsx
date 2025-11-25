import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // true = Login, false = Signup

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/login',
        { email, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      setError('');
      navigate("/feed");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/signup',
        { firstName, lastName, email, password, age, gender, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate('/feed');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {/* OUTER CONTAINER — FIXED FOR MOBILE */}
      <div className="flex flex-col justify-center items-center lg:mt-[60px] mt-10 px-4 w-full mb-50">

        {/* FORM CARD */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-4">
          <legend className="fieldset-legend text-xl">
            {isLoggedIn ? "Login" : "Sign Up"}
          </legend>

          {/* SIGN UP FIELDS */}
          {!isLoggedIn && (
            <>
              <label className="label">First Name</label>
              <input
                type="text"
                className="input"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="label">Last Name</label>
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label className="label">Age</label>
              <input
                type="text"
                className="input"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <label className="label">Gender</label>
              <input
                type="text"
                className="input"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Photo Url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </>
          )}

          {/* COMMON FIELDS */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-neutral mt-4 w-full"
            onClick={isLoggedIn ? handleLogin : handleSignUp}
          >
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>
        </fieldset>

        {/* TOGGLE TEXT */}
        <div className="flex justify-center cursor-pointer mt-3">
          {isLoggedIn ? (
            <p onClick={() => setIsLoggedIn(false)} className="text-sm">
              New User? Create an Account
            </p>
          ) : (
            <p onClick={() => setIsLoggedIn(true)} className="text-sm">
              Already have an Account? Login
            </p>
          )}
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
      </div>
    </>
  );
};

export default Login;
