import { createSlice } from '@reduxjs/toolkit'

const userFeedSlice = createSlice({
    name: "userFeed",
    initialState:  null,
    reducers: {
        addUserFeed: (state, action) => {
            return action.payload;
        },
        removeUserFeed: (state, action) => {
            return state.filter((user) => user._id !== action.payload);
        },
        clearFeed: () => {
            return null;
        }
    }
});

export default userFeedSlice.reducer;
export const { addUserFeed, removeUserFeed, clearFeed } = userFeedSlice.actions;
