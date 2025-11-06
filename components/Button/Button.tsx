import { CSSProperties } from "react";

type Props = {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  style?: CSSProperties;
};

function Button({ type = "button", text, onClick, style }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;
