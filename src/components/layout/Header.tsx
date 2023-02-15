import { FC } from "react";
import { FaBars } from "react-icons/fa";
import ImageJaneDoe from "../../assets/avatars/avatar-jane-doe.jpg";
import ImageLogo from "../../assets/logo/logo.png";

interface IHeader {
  sidebarIsOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

const Header: FC<IHeader> = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <header className="sticky z-40 top-0 left-0 flex justify-between items-center w-full h-16 p-4 shadow-lg text-gray-500 bg-white">
      <div className="flex flex-row items-center gap-x-2">
        <FaBars
          className="text-xl sm:hidden"
          onClick={() => toggleSidebar(!sidebarIsOpen)}
        />
        <div className="flex w-12 h-12 sm:hidden">
          <img src={ImageLogo} alt="Logo - Fitness" className="w-full h-full" />
        </div>
      </div>
      <div className="w-8 h-8 rounded-md overflow-hidden">
        <img
          src={ImageJaneDoe}
          alt="Avatar - Jane Doe"
          className="w-full h-full"
        />
      </div>
    </header>
  );
};

export default Header;
