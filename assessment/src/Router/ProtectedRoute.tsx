import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
    const {Component} = props;
    const navigate = useNavigate();
    const loginInfo = useSelector((store: any) => store.user.loginState);

    useEffect(() => {
      if(!loginInfo?.token) {
         const path = "/";
         navigate(path);
      }
    })

    return(
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoute;