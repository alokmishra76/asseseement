import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { setUserInfo } from "../Store/UserSlice";
import { API_URL } from "../utils/environment";
import { useNavigate } from "react-router-dom";
import { User } from "../Modals/userResponse";
import { signUpService } from "../Service/auth.service";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const SIGN_IN_URL = `${API_URL}/api/register`;
    const navigate = useNavigate();

    useEffect(() => {
       setEmail("eve.holt@reqres.in");
       setPassword("pistol")
    }, [])

    const SignUpUser = async () => {
        const data = signUpService(SIGN_IN_URL, email, password);
        data.then((res: User) => {
            setUserData(res)
        })
    }

    const navigateToDashboard = () => {
       const path = '/dashboard'
       navigate(path)
    }

    const setUserData = (data: User) => {
      if(!!data.token) {
        navigateToDashboard();
        dispatch(setUserInfo(data))
      }
    }
    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register With US</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input placeholder="Enter email" id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input placeholder="Enter Password" id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button role={"button"} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={SignUpUser}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;