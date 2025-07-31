import type { ReactElement } from "react";

interface SideBarHeaderProps {
    title:string,
    startIcon?:ReactElement,
    endIcon?:ReactElement
}

export function SideBarHeader(props:SideBarHeaderProps){
    return (<>
        <div className="flex  text-gray-500">
            <div className="p-2 pr-3">
                {props.startIcon}
            </div>
            <div className="p-2 text-3xl">
                {props.title}
            </div>
            <div className="p-2">
                {props.endIcon}
            </div>
        </div>
        <hr className="m-1"/>

    </>);
}