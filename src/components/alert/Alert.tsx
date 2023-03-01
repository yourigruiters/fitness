import classNames from "classnames";
import { FC } from "react";
import { getAlertContent } from "../../helper/alert";

interface IAlert {
  issue: string | number;
}

const Alert: FC<IAlert> = ({ issue }) => {
  const { title, description, type = "error" } = getAlertContent(issue);

  return (
    <div
      className={classNames(
        "flex flex-col gap-y-2 w-full h-auto p-4 rounded-lg border",
        {
          "bg-red-100 border-red-700 text-red-600": type === "error",
          "bg-green-100 border-green-700 text-green-600": type === "success",
        }
      )}
    >
      <p className="font-bold text-lg">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Alert;
