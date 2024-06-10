import { createSlice } from "@reduxjs/toolkit";

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

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
