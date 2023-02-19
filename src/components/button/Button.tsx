import classNames from "classnames";
import { FC } from "react";

interface IButton {
  title: string;
  isFluid?: boolean;
  style?: "blue";
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  title,
  isFluid = false,
  style = "blue",
  type = "submit",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "flex justify-center items-center py-3 text-sm rounded-md transition-[background]",
        {
          "w-full": isFluid,
          "w-fit px-4": !isFluid,
          "bg-blue-700 hover:bg-blue-600 text-white": style === "blue",
        }
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
