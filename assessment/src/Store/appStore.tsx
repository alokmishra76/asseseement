import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import DashboardSlice from "./DashboardSlice";

const appStore = configureStore({
    reducer: {
        user: UserSlice,
        dashboard: DashboardSlice
    }
});


export default appStore;