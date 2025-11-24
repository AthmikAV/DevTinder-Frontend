import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import user from './userSlice'
import requestsReducer from './requestsSlice'

const appStore = configureStore({
    reducer: {
        user: user,
        requests:requestsReducer
    }
})

export default appStore