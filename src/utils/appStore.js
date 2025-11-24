import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import user from './userSlice'
import requestsReducer from './requestsSlice'
import userRequest from "./userFeedSlice"
import connections from './connectionSlice'

const appStore = configureStore({
    reducer: {
        user: user,
        requests: requestsReducer,
        userFeed: userRequest,
        connections:connections
    }
})

export default appStore