import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios" ;
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function SignUp(){
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signUp(){
        const userName = userNameRef.current?.value ;
        const password = passwordRef.current?.value ;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username : userName,
                password : password
        }).then((response) =>{
            navigate("/signin")
        }).catch((error) => {
            alert(error)
        });
        
    } 
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="space-y-4">
                <div className="flex justify-center">
                        <h1 className="items-center text-gray-600 text-2xl">Sign Up</h1>
                    </div>
                    <Input type="text" placeholder="Enter user name" ref={userNameRef}/>
                    <Input type="password" placeholder="Enter password" ref={passwordRef}/>
                    <div className="flex justify-center pt-4">
                        <Button variant="Primary" text="Sign Up" loading={false} onClick={signUp}></Button>    
                    </div>
                    <a onClick={() =>{
                        navigate("/signin")
                    }}>Already user ? Sign in</a>
                </div>
            </div>
        </div>
    );
}