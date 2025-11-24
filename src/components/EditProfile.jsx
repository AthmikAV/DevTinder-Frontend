import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router'
import UserCard from './UserCard'

const EditProfile = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [about, setAbout] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Fetch user data if not available
    useEffect(() => {
        const fetchUserData = async () => {
            if (!user) {
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
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Populate form fields when user data is available
    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
            setAge(user.age || '');
            setGender(user.gender || '');
            setPhotoUrl(user.photoUrl || '');
            setAbout(user.about || '');
        }
    }, [user]);

    const handleEditForm = async () => {
        try {
            setSaving(true);
            setError('');
            
            console.log('Sending PATCH request to:', BASE_URL + '/profile/edit');
            console.log('Data:', { firstName, lastName, age, gender, photoUrl, about });
            
            const response = await axios.patch(
                BASE_URL + '/profile/edit',
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    photoUrl,
                    about
                },
                { 
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            console.log('Response:', response.data);
            dispatch(addUser(response.data));
            alert('Profile updated successfully!');
            
        } catch (error) {
            console.error('Error details:', error);
            console.error('Error response:', error.response);
            setError(error.response?.data?.message || error.message || 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    if (loading || !user) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className='flex justify-center py-15'>
            <div className="flex justify-center items-center p-4">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box 
                        w-full max-w-sm border p-4">
                    <legend className="fieldset-legend text-xl">Edit Profile</legend>

                    <label className="label">FirstName</label>
                    <input 
                        className="input" 
                        placeholder="FirstName" 
                        value={firstName} 
                        onChange={(event) => setFirstName(event.target.value)} 
                        disabled={saving}
                    />

                    <label className="label">LastName</label>
                    <input 
                        className="input" 
                        placeholder="LastName" 
                        value={lastName} 
                        onChange={(event) => setLastName(event.target.value)}
                        disabled={saving}
                    />

                    <label className="label">Age</label>
                    <input 
                        className="input" 
                        placeholder="Age" 
                        value={age} 
                        onChange={(event) => setAge(event.target.value)}
                        disabled={saving}
                    />

                    <label className="label">Gender</label>
                    <div className='flex'>
                        <input 
                            id='male' 
                            type="radio" 
                            name="radio-2" 
                            checked={gender === "male"} 
                            value={'male'} 
                            onChange={(event) => setGender(event.target.value)} 
                            className="radio radio-xs mr-1"
                            disabled={saving}
                        />
                        <label htmlFor="male">male</label>

                        <input 
                            type="radio" 
                            id='female' 
                            name="radio-2" 
                            checked={gender === "female"} 
                            value={'female'} 
                            onChange={(event) => setGender(event.target.value)} 
                            className="radio radio-xs ml-5 mr-1"
                            disabled={saving}
                        />
                        <label htmlFor="female">female</label>
                    </div>

                    <label className="label">About</label>
                    <textarea 
                        className="textarea" 
                        placeholder="About" 
                        value={about} 
                        onChange={(event) => setAbout(event.target.value)}
                        disabled={saving}
                    ></textarea>

                    <label className="label">Photo URL</label>
                    <input 
                        className="input" 
                        placeholder="Photo URL" 
                        value={photoUrl} 
                        onChange={(event) => setPhotoUrl(event.target.value)}
                        disabled={saving}
                    />

                    {error && <p className='text-red-500 my-2'>{error}</p>}

                    <button 
                        className="btn btn-neutral mt-4" 
                        onClick={handleEditForm}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Save'}
                    </button>
                </fieldset>
            </div>
            {user && <div className='h-[200px]'><UserCard user={user} /></div>}
        </div>
    )
}

export default EditProfile