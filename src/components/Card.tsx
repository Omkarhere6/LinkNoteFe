import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
  title: string;
  type: "Youtube" | "Twitter" | "Documnet";
  link: string;
}

export function Card(props: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow border-gray-200 min-w-72 max-w-72 border min-h-96 max-h-96">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
          {props.type === "Youtube" && (
            <div className="text-gray-500 pr-2"><YoutubeIcon size="size-4"/></div>
          )}
          {props.type === "Twitter" && (
            <div className="text-gray-500 pr-2"><TwitterIcon size="size-4"/></div>
          )}
          {props.type === "Documnet" && (
            <div className="text-gray-500 pr-2"><DocumentIcon size="size-4"/></div>
          )}
            <span className="text-grey-800 font-bold">{props.title}</span>
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2"><ShareIcon size="size-4"/></div>
            <div className="text-gray-500"><DeleteIcon size="size-4"/></div>
          </div>
        </div>
        <div className="pt-4">
          {props.type === "Youtube" && (
            <iframe
              className="w-full"
              height="315"
              src={props.link.replace("watch?v=", "embed/")}
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
        </div>
      </div>
    </div>
  );
}
