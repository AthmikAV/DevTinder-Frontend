import React from 'react'
import { useReducer } from 'react'
import { Navigate } from 'react-router';
const ProtectedPage = ({ children }) => {

    const isLoggedIn = useReducer((state) => state.user);
    if (!isLoggedIn) {
        return <Navigate to="login" />
    }
    return children
}

export default ProtectedPage