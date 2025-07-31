interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  ref?:any
}

const defaultStyles =
  " pt-4 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

export function Input(props: InputProps) {
  return (
    <input
      ref={props.ref}
      type={props.type}
      className={defaultStyles}
      placeholder={props.placeholder}
    />
  );
}
