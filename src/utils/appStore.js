import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import user from './userSlice'


const appStore = configureStore({
    reducer : {user}
})

export default appStore