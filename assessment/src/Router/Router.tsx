import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../Components/SignUp";
import SigIn from "../Components/SignIn";
import Dashboard from "../Components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <SigIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute Component={Dashboard} />
            }
        ]
    }
])

export default router;