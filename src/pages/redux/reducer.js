import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.data = [

                { email: action.payload.email, password: action.payload.password }
            ];
        }
    }
});


export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
    const response = await fetch('http://localhost:4006/api/log');
    const jsonData = await response.json();
    return jsonData;
  });

export const { addUser } = userSlice.actions;
export default userSlice.reducer;