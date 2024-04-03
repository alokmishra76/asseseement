import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../Modals/userDetail.model";

const defaultDashboardState: Array<UserDetails> = []

const dashboard = createSlice({
   name: 'dashboard',
   initialState: {
    dashboardData: defaultDashboardState
   },
   reducers: {
    setDashBoardInfo: (state, action) => {
      const data = action.payload;
      state.dashboardData = data;
    }
   }
});

export const { setDashBoardInfo } = dashboard.actions;

export default dashboard.reducer;