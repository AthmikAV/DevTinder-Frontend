import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-6">{message || "Something went wrong."}</p>
      <button
        onClick={() => navigate('/feed')}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back to Feed
      </button>
    </div>
  );
};

export default ErrorPage;
