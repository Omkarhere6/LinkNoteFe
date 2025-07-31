import type { ReactElement } from "react";

interface SideBarItemProps{
    startIcon:ReactElement,
    text :string
}

export function SideBarItem(props:SideBarItemProps){
    return (
        <div className="flex hover:bg-blue-100 transition duration-200 cursor-pointer">
            <div className="p-2 pr-4 text-gray-500">
                {props.startIcon}
            </div>
            <div className="p-2 text-xl text-gray-500">
                {props.text}
            </div>
        </div>
    );
}