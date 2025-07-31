import { type ReactElement } from "react";

interface ButtonProps {
  variant: "Primary" | "Secondary";
  text: string;
  StartIcon?: ReactElement;
  EndIcon?: ReactElement;
  onClick?: () => void;
  loading?:boolean
}

const variantValues = {
  Primary: "bg-blue-600 text-white",
  Secondary: "bg-blue-100 text-blue-600",
};

const defaultStyles = "rounded-md p-2 font-light flex items-center ";

export function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${variantValues[props.variant]} ${defaultStyles} ${props.loading ? "opacity-45" : ""}` }
        disabled={props.loading}
      >
        <div className="pr-2">{props.StartIcon}</div>
        {props.text}
      </button>
    </>
  );
}
