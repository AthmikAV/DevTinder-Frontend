import React from 'react'

const UserCard = (user) => {
    const { firstName, lastName, age, gender, photoUrl, about } = user.user;
       
  return (
      <div className='flex justify-center mt-7 '>
          <div className="card bg-base-200 w-60 shadow-sm pt-6">
        <figure>
            <img
            src= {photoUrl}
            alt="user image" />
        </figure>
        <div className="card-body">
                  <h2 className="card-title">{firstName+' ' + lastName}</h2>
                  <p>about: {about}</p>
                  <p>age: {age}</p>
                  <p>gender: {gender }</p>
                  <div className="card-actions justify-center">
                      <button className="btn btn-error">Ignore</button>
                      <button className="btn btn-primary">Interested</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserCard