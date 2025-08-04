import { CancelIcon } from "../icons/CancelIcon";
import { TagIcon } from "../icons/TagIcon";

interface TagsComponentProps {
  tags: string[];
  onCancelClick? : (tag :string) => void;
  showCancelButton: boolean;
}
export function TagsComponent(props:TagsComponentProps) {
    return (<div className="flex flex-wrap gap-2 p-2">
                        {props.tags?.map((tag,index)=>{
                          return(<div className="flex text-gray-500 bg-blue-100 p-1 rounded-3xl" key={index}>
                            <TagIcon size="size-6"/>
                            <span>{tag}</span>
                            {props.showCancelButton && (<div className="pt-1 cursor-pointer hover:text-gray-700 ml-1" onClick={() => {props.onCancelClick?(tag) : null}} >
                                    <CancelIcon size="size-4"/>
                                    </div>
                                )}
                          </div>)
                        })}
            </div>);
}