import { useRef, useState } from "react";
import { CancelIcon } from "../icons/CancelIcon";
import { Button } from "./Button";
import { DropDown } from "./DropDown";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useContent } from "../hooks/useContents";
import { TagIcon } from "../icons/TagIcon";
import { TagsComponent } from "./TagsComponent";

interface AddContentModalProps {
  open: boolean;
  onClose: () => void;
}

const contentType = ["Youtube", "Twitter","Reddit","Document"];

export function AddContentModal(props: AddContentModalProps) {

  const contentTitleRef = useRef<HTMLInputElement>(null);
  const contentLinkRef = useRef<HTMLInputElement>(null);
  const contentTypeRef = useRef<HTMLSelectElement>(null);
  const contentTagsRef = useRef<HTMLInputElement>(null);
  const [tags , setTags ] = useState<string[]>([]);
  const { refresh } = useContent();


  const addTagsToList = () => {
    const tag = contentTagsRef.current?.value;
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag.trim()]);
      if(contentTagsRef.current?.value){
        contentTagsRef.current.value = ""; // Clear the input after adding
      }
   }
  }

async function extractYouTubeID(url :string) {
  const regex = /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  console.log(match ? match[1] : "")
  return match ? match[1] : "";
}

  const AddContent =async () => {
    const title = contentTitleRef.current?.value;
    const link = contentLinkRef.current?.value;
    const type = contentTypeRef.current?.value;
    if (title && link && type) {
        const linkUpdate = type === "Youtube" ? await extractYouTubeID(link) : link;
        console.log({ 
          title : title, 
          link:linkUpdate, 
          type:type, 
          tags : tags
        });
        await axios.post(`${BACKEND_URL}/api/v1/content`, { 
          title : title, 
          link:linkUpdate, 
          type:type, 
          tags : tags
        }, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
          }
          ).then((response) => {
            refresh();
            setTags([]);
            props.onClose();
        }
      ).catch((error) => {
          console.error("Error adding content:", error); 
        }
      ); 
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <>
      <div>
        {props.open && (
          <div>
              <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-75 flex justify-center" >

              </div>
              <div className="flex items-center justify-center h-screen w-screen fixed top-0 left-0">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
                <div className="flex justify-between m-2 mb-4">
                  <span className="text-xl font-semibold ">Add Content</span>
                  <div
                    onClick={props.onClose}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    <CancelIcon size="size-8"/>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                </div>
                <div className="space-y-4">
                  <Input ref={contentTitleRef} placeholder="Enter title" type="text"></Input>
                  <Input ref={contentLinkRef} placeholder="Enter link" type="text"></Input>
                  <DropDown ref={contentTypeRef} name="Content Type" id="contentType" placeholder="Select a type" dataSource={contentType}></DropDown>
                  <div className="flex justify-between items-center space-x-2">
                    <Input ref={contentTagsRef} placeholder="Enter tags" type="text"></Input>
                    <Button text="+" variant="Secondary" onClick={addTagsToList}></Button>
                  </div>
                  <TagsComponent  tags={tags} showCancelButton={true} onCancelClick={(tag) => {setTags( tags.filter(x => x !== tag) )}}></TagsComponent>
                  <div className="flex justify-center">
                    <Button text="Add Content" variant="Primary" loading={false} onClick={AddContent}></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </>
  );
}
