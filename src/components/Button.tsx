import { type ReactElement } from "react"; 

interface ButtonProps {
    variant : "Primary" | "Secondary";
    text : string;
    StartIcon?:ReactElement;
    EndIcon?:ReactElement;
}

const variantValues = {
    "Primary" : "bg-blue-600 text-white",
    "Secondary" :"bg-blue-100 text-blue-600"
}

const defaultStyles = "rounded-md p-4 font-light flex items-center";

export function Button(props : ButtonProps){
    return  (<>
        <button className={`${variantValues[props.variant]} ${defaultStyles}`}>
                   <div className="pr-2">
                        {props.StartIcon}
                    </div>
                    { props.text}
        </button>
    </>);
} 