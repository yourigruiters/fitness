import { FC } from "react";
import { FaBars } from "react-icons/fa";
import ImageLogo from "../../assets/logo/logo.png";
import AccountSwitcher from "../switchers/AccountSwitcher";
import LanguageSwitcher from "../switchers/LanguageSwitcher";
import ThemeSwitcher from "../switchers/ThemeSwitcher";

interface IHeader {
  sidebarIsOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

const Header: FC<IHeader> = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <header className="transition-all sticky z-40 top-0 left-0 flex justify-between items-center w-full h-16 p-4 shadow-lg text-gray-500 bg-white md:h-20 md:px-8">
      <div className="flex flex-row items-center gap-x-2">
        <FaBars
          className="text-xl sm:hidden"
          onClick={() => toggleSidebar(!sidebarIsOpen)}
        />
        <div className="flex w-12 h-12 sm:hidden">
          <img src={ImageLogo} alt="Logo - Fitness" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-2 w-auto h-full">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <AccountSwitcher />
      </div>
    </header>
  );
};

export default Header;
