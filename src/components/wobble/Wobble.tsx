import classNames from "classnames";
import { FC, useState } from "react";
import Popout from "../popout/Popout";

interface IWobble {
  active?: boolean;
  popoutContent?: JSX.Element;
  popoutAlignment?: "left" | "right";
  type?: "icon" | "default";
  onClick?: () => void;
  customClassNames?: string;
  noPadding?: boolean;
  children: JSX.Element;
}

const Wobble: FC<IWobble> = ({
  active,
  popoutContent,
  popoutAlignment,
  type = "default",
  onClick,
  customClassNames,
  noPadding = false,
  children,
}) => {
  const [isPopoutOpen, setIsPopoutOpen] = useState<boolean>(false);

  const predefinedClassName = classNames(
    "flex  items-center rounded-md cursor-pointer",
    {
      "justify-center w-10 h-10 p-2": type === "icon",
      "justify-start w-full h-auto p-3": type === "default",
      "!w-auto !p-0": noPadding,
      "bg-gray-100 text-blue-700": active,
      "bg-white text-gray-300 hover:bg-gray-100 hover:text-blue-700": !active,
    },
    customClassNames
  );

  if (!popoutContent) {
    return (
      <div
        className={predefinedClassName}
        onClick={onClick ? onClick : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        onClick={onClick ? onClick : () => setIsPopoutOpen(!isPopoutOpen)}
        className={predefinedClassName}
      >
        {children}
      </div>
      {isPopoutOpen && (
        <Popout popoutAlignment={popoutAlignment} noPadding={noPadding}>
          {popoutContent}
        </Popout>
      )}
    </div>
  );
};

export default Wobble;
