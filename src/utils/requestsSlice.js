import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],   // << FIXED
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },

    removeRequests: (state, action) => {
      return state.filter(
        (req) => req._id !== action.payload  // remove matching id
      );
    }
  }
});

export const { addRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
