import { FC } from "react";

interface ISplitter {
  children: JSX.Element[];
}

const Splitter: FC<ISplitter> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-2 w-full h-auto">{children}</div>
  );
};

export default Splitter;
