import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
    return (
        <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="space-y-4">
                    <Input type="text" placeholder="Enter user name"/>
                    <Input type="password" placeholder="Enter password"/>
                    <div className="flex justify-center pt-4">
                        <Button variant="Primary" text="Sign In" loading={false}></Button>    
                    </div>
                </div>
            </div>
        </div>
    );
}

