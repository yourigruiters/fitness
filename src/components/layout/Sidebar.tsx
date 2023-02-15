import { FC } from "react";
import classNames from "classnames";
import { FaTimes } from "react-icons/fa";
import ImageLogo from "../../assets/logo/logo.png";
import Nav from "./Nav";

interface ISidebar {
  isOpen: boolean;
  close: (isClosed: boolean) => void;
}

const Sidebar: FC<ISidebar> = ({ isOpen, close }) => {
  return (
    <section
      className={classNames(
        "fixed z-50 top-0 flex flex-col gap-y-10 w-full h-full p-4 transition-all bg-default-900  sm:w-64",
        {
          "-left-full sm:-left-0": !isOpen,
          "-left-0": isOpen,
        }
      )}
    >
      <div
        className="absolute right-4 top-4 text-white cursor-pointer sm:hidden hover:text-gray-400"
        onClick={() => close(false)}
      >
        <FaTimes className="w-6 h-6" />
      </div>
      <div className="flex items-end w-full h-auto sm:flex">
        <div className="w-12 h-12">
          <img src={ImageLogo} alt="Logo - Fitness" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-white text-xs">TrackMy</h2>
          <h2 className="font-bold text-white text-xl -mt-1">Fitness</h2>
        </div>
      </div>
      <Nav />
    </section>
  );
};

export default Sidebar;
