import { createSlice } from "@reduxjs/toolkit";



const connectionsSlice = createSlice({
  name: "connections",
  initialState: null, 
  reducers: {
    setConnections: (state, action) => {
      return action.payload;
    },


    removeConnection: (state, action) => {
      return state.filter((conn) => conn._id !== action.payload);
    },

    clearConnections: () => {
      return [];
    }
  }
});

export const {
  setConnections,
  removeConnection,
  clearConnections
} = connectionsSlice.actions;

export default connectionsSlice.reducer;


