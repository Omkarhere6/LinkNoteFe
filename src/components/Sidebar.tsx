import { useEffect, useState } from "react";
import { DocumentIcon } from "../icons/DocumentIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { NoteIcon } from "../icons/NoteIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarItem } from "./SideBarItem";

const sidebarItems = [
  { text: "Home", icon: <HomeIcon size="size-7" /> },
  { text: "Twitter", icon: <TwitterIcon size="size-5" /> },
  { text: "Youtube", icon: <YoutubeIcon size="size-5" /> },
  { text: "Document", icon: <DocumentIcon size="size-7" /> },
  { text: "Tags", icon: <TagIcon size="size-7" /> },
];

export function Sidebar(){
    const [selected, setSelected] = useState("Home");

    useEffect(() => {
        
    },[selected]);

    return (
    <div className="h-screen w-68 bg-white border-gray-200 border-r left-0 top-0 fixed">
      <div className="p-4">
        <SideBarHeader title="Link-Note" startIcon={<NoteIcon size="size-8" />} />
      </div>
      <div className="py-4 pl-4">
        {sidebarItems.map((item) => (
          <SideBarItem
            key={item.text}
            text={item.text}
            startIcon={item.icon}
            selected={selected === item.text}
            onClick={() => setSelected(item.text)}
          />
        ))}
      </div>
    </div>
  );
} 
