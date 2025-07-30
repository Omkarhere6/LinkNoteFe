import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title : string,
    type:string
}

export function Card(){
    return (<div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {ShareIcon("size-4")}
                    </div>
                    This is a title
                </div>
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2">
                        {ShareIcon("size-4")}
                    </div>
                    <div className="text-gray-500">
                        {ShareIcon("size-4")}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}