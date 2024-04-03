import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { setDashBoardInfo } from "../Store/DashboardSlice";

const Dashboard = () => {
    const userData = useSelector((store: any) => store.dashboard.dashboardData);
    const dispatch = useDispatch();

    useEffect(() => {
      getUserData();
    }, [])

    const getUserData = () => {
       fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => setUserData(data))
    }

    const setUserData = (data: any) => {
       dispatch(setDashBoardInfo(data));
    }

    return(
        <div className="m-20 flex flex-wrap gap-5 justify-center">
          {
            userData.map((userInfo: any) => <UserCard key={userInfo?.id} userData={userInfo} />)
          }
        </div>
    )
}

export default Dashboard;