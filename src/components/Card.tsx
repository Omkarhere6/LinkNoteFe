import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  type: "Youtube" | "Twitter";
  link: string;
}

export function Card(props: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow border-gray-200 max-w-72 border">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">{ShareIcon("size-4")}</div>

            {props.title}
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">{ShareIcon("size-4")}</div>
            <div className="text-gray-500">{ShareIcon("size-4")}</div>
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
