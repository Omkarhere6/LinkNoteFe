import axios from "axios";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkOpenIcon } from "../icons/linkOpenIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TagsComponent } from "./TagsComponent";
import { BACKEND_URL } from "../config";
import { EditIcon } from "../icons/EditIcon";

interface CardProps {
  title: string;
  type: "Youtube" | "Twitter" | "Document";
  link: string;
  tags : string[];
  contentId: string;
}

function openLinkInNewTab(link: string,type: string) {

  if (type === "Twitter") {
    link = link.replace("x.com", "twitter.com");
  }else if (type === "Youtube") {
    link = `https://www.youtube.com/watch?v=${link}`;
  }
  window.open(link, "_blank");
}

async function deleteContent(contentId: string) {
    await axios.delete(`${BACKEND_URL}/api/v1/content/${contentId}`, 
              {
                headers: {
                          "authorization": localStorage.getItem("token")
            }})
      .then(() => {
        alert("Content deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting content:", error);
        alert("Failed to delete content");
      });
}

export function Card(props: CardProps) {
  return (
    <div>
      <div className="  p-4 bg-white rounded-md shadow border-gray-200 min-w-72 max-w-72 border min-h-108 max-h-108 overflow-x-auto">
        <div className=" flex justify-between">
          <div className="flex items-center text-md">
          {props.type === "Youtube" && (
            <div className="text-gray-500 pr-2"><YoutubeIcon size="size-4"/></div>
          )}
          {props.type === "Twitter" && (
            <div className="text-gray-500 pr-2"><TwitterIcon size="size-4"/></div>
          )}
          {props.type === "Document" && (
            <div className="text-gray-500 pr-2"><DocumentIcon size="size-4"/></div>
          )}
            <span className="text-grey-800 font-bold">{props.title}</span>
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2" onClick={() =>{openLinkInNewTab(props.link,props.type)}}><LinkOpenIcon size="size-4"/></div>
            <div className="text-gray-500 pr-2" ><EditIcon size="size-4"/></div>
            <div className="text-gray-500" onClick={() =>{deleteContent(props.contentId)}}><DeleteIcon size="size-4"/></div>
          </div>
        </div>
        <div className="pt-4 flex flex-col justify-between h-[360px]">
          {props.type === "Youtube" && (
            <iframe
              className="w-full"
              height="300"
              src={`https://www.youtube.com/embed/${props.link}?si=iQ3UDZmroDe7-Bic`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          {props.type === "Twitter" && (
            <blockquote className="twitter-tweet">
              <a href={props.link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}

          {props.type === "Document" && (
            <div className="flex justify-center mt-25">
              <a className="text-blue-500 underline" href={props.link}>{props.link}</a>
            </div>
          )}
          <div className="">
            <TagsComponent tags={props.tags} showCancelButton={false}></TagsComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
