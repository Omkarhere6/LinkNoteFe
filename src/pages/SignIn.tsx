import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import {useRef} from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){
    const userNameReference = useRef<HTMLInputElement>(null);
    const passwordRefrence  = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const signIn =async () =>{
        const userName = userNameReference.current?.value;
        const password = passwordRefrence.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signin`,{
                    username : userName,
                    password : password
            }).then((response)=>{
                alert(response.data.message)
                navigate("/dashboard")
            }).catch((error)=>{
                alert(error)
            })

    }

    return (
        <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <h1 className="items-center text-gray-600 text-2xl">Sign In</h1>
                    </div>
                    <Input ref={userNameReference} type="text" placeholder="Enter user name"/>
                    <Input ref={passwordRefrence} type="password" placeholder="Enter password"/>
                    <div className="flex justify-center pt-4">
                        <Button onClick={signIn} variant="Primary" text="Sign In" loading={false}></Button>    
                    </div>
                    <a onClick={() =>{
                        navigate("/")
                    }}>Don't have a account ? Sign up</a>
                </div>
            </div>
        </div>
    );
}

