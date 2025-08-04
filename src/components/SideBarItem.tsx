import type { ReactElement } from "react";

interface SideBarItemProps{
    startIcon:ReactElement,
    text :string,
    selected?: boolean,
    onClick?:()=> void
}

export function SideBarItem(props:SideBarItemProps){
    return (
        <div onClick={props.onClick} className={`${props.selected ? 'bg-blue-200 font-bold ' :' ' }flex hover:bg-blue-100 transition duration-200 cursor-pointer`}>
            <div className="p-2 pr-4 text-gray-500">
                {props.startIcon}
            </div>
            <div className="p-2 text-xl text-gray-500">
                {props.text}
            </div>
        </div>
    );
}