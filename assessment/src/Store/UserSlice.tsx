import { createSlice } from "@reduxjs/toolkit";

interface LogInState {
 token: string;
};

let defaultLogInState: LogInState = {
  token: ""
}

const initialState = defaultLogInState;


const userInfo = createSlice({
   name: 'user',
   initialState: {
     loginState: initialState
   },
   reducers: {
    setUserInfo: (state, action) => {
        state.loginState.token = action.payload?.token;
    }
   }
});

export const { setUserInfo } = userInfo.actions;

export default userInfo.reducer;