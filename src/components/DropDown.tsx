import { useState } from "react";

interface DropDownProps{
    name : string,
    id : string,
    dataSource : string[],
    initialValue? : string,
    placeholder:string,
    ref? : React.Ref<HTMLSelectElement>
}

const defaultStyles =
  "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";


export function DropDown(props: DropDownProps){
    const [selectedvalue,setSelectedvalue] = useState(props.initialValue == undefined ? "" : props.initialValue);

    const changeHandler = (event : React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectedvalue(event.target.value)
    }

    return(<>
        <select ref={props.ref} className={defaultStyles} name={props.name} id={props.id} value={selectedvalue} onChange={changeHandler}>
            {props.dataSource.map((item, index) => (
                <option key={index} value={item}>
                    {item}  
                </option>
            ))} 
            <option value="" disabled>{props.placeholder}</option>
        </select>
    </>);
}