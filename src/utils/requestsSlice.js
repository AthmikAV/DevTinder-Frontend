import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "requests",
    initialState: null,   // ok
    reducers: {
        addRequests: (state, action) => {
            return action.payload;   // always return payload
        },
        removeRequests: () => null
    }
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;
