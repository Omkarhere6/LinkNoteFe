import { DocumentIcon } from "../icons/DocumentIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { NoteIcon } from "../icons/NoteIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarItem } from "./SideBarItem";

export function Sidebar(){
    return <div className="h-screen w-68  bg-white border-gray-200 border-r left-0 top-0 fixed">
         <div className="p-4">
             <SideBarHeader title="Link-Note" startIcon={<NoteIcon size="size-8"/>}/>   
         </div>

         <div className="py-4 pl-4">
            <SideBarItem text="Home" startIcon={<HomeIcon size="size-7"/>}/>
            <SideBarItem text="Twitter" startIcon={<TwitterIcon size="size-5"/>}/>
            <SideBarItem text="Youtube" startIcon={<YoutubeIcon size="size-5"/>}/>
            <SideBarItem text="Document" startIcon={<DocumentIcon size="size-7"/>}/>
            <SideBarItem text="Tags" startIcon={<TagIcon size="size-7"/>}/>

         </div>
    </div>
} 
