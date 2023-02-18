import classNames from "classnames";
import { FC } from "react";

interface IPopout {
  popoutAlignment?: "left" | "right";
  noPadding?: boolean;
  children: JSX.Element;
}

const Popout: FC<IPopout> = ({
  popoutAlignment = "right",
  noPadding = false,
  children,
}) => {
  return (
    <div
      className={classNames(
        "absolute top-16 right-0 w-max-content h-auto px-3 py-2 bg-white shadow-md rounded-md",
        {
          "top-[68px]": noPadding,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Popout;
