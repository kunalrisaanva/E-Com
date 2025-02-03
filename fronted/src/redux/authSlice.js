import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null
}


const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
           loginRequest:(state,action) => {
            state.loading = true;
            state.error = null;

           },
           
           loginSuccess:(state,action) => {
            state.loading = true,
            state.isAuthenticated = true,
            state.user = action.payload
           },

           loginFailure:(state,action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload; // Store error message
           },

           logout:(state,action) => {
            state.user = null;
            state.isAuthenticated = false;

           }


    }
});

export const {loginFailure,loginRequest,loginSuccess,logout} = authSlice.actions;

export default authSlice.reducer;